import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showDEIDropdown, setShowDEIDropdown] = useState(false);

  const profileRef = useRef(null);
  const deiRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleProfileDropdown = () => setShowProfileDropdown(prev => !prev);
  const toggleDEIDropdown = () => setShowDEIDropdown(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deiRef.current && !deiRef.current.contains(e.target)) {
        setShowDEIDropdown(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={require("../../images/logo.png")} alt="Streelancer Logo" />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : "close"}`}>
        <li onClick={() => {navigate("/");setMenuOpen(false)}}>Home</li>
        <li onClick={() => {navigate("/GlobalFlex");setMenuOpen(false)}}>Remote Talent Network</li>

        {/* DEI Talent Network with dropdown */}
        <li
          className="dropdown-container"
          ref={deiRef}
          onClick={toggleDEIDropdown}
        >
          <div className="dropdown-header">
            DEI Talent 
            <MdKeyboardArrowDown />
          </div>
          {showDEIDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => { navigate("/DEITalent"); setMenuOpen(false); setShowDEIDropdown(false); }}>
                DEI Talent Network
              </li>
              <li onClick={() => { navigate("/DEITalenthire"); setMenuOpen(false); setShowDEIDropdown(false); }}>
                DEI Talent Hire
              </li>
            </ul>
          )}
        </li>

        
        <li onClick={() => setMenuOpen(false)}>Academy</li>
        <li onClick={() => setMenuOpen(false)}>Community</li>

        <li>
          {isLoggedIn && (
            <div className="profile-dropdown-container desktop-only" ref={profileRef}>
              <img
                src={require("../../images/profile.avif")}
                alt="Profile"
                className="profile-image"
                onClick={toggleProfileDropdown}
              />
              <MdKeyboardArrowDown onClick={toggleProfileDropdown} className="dropdown-arrow"/>
              {showProfileDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-item"><RiEqualizerLine /> Account</div>
                  <div className="dropdown-item"><CiSettings /> Settings</div>
                  <div className="dropdown-item" onClick={handleLogout}><IoIosLogOut /> Log Out</div>
                </div>
              )}
            </div>
          )}
        </li>

        {isLoggedIn ? (
          <>
            {/* Mobile menu items */}
            <li onClick={() => setMenuOpen(false)} className="mobile-only"><RiEqualizerLine /> Account</li>
            <li onClick={() => setMenuOpen(false)} className="mobile-only"><CiSettings /> Settings</li>
            <li onClick={() => { handleLogout(); setMenuOpen(false); }} className="mobile-only"><IoIosLogOut /> Log Out</li>
          </>
        ) : (
          <>
            <li onClick={() => setMenuOpen(false)}>
              <button className="btn-clear" onClick={() => navigate("/Signup")}>Sign up</button>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <button className="btn-clear2" onClick={() => navigate("/login")}>Log in</button>
            </li>
          </>
        )}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
