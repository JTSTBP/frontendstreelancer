import React, { useState, useRef, useEffect } from "react";
import logo from "../../../images/logo.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CommunityNavbar = ({ isLoggedIn, setIsLoggedIn }) => {
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
        <img src={logo} alt="Streelancer Logo" />
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
        <li onClick={() => { navigate("/Community");setMenuOpen(false)}}>Community</li>

        

        <li onClick={() => setMenuOpen(false)}>
              <button className="btn-clear2" onClick={() => navigate("/login")}>Join Us</button>
            </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default CommunityNavbar;
