
import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import womanLaptop from "../../images/girl.png";

import HeroServices from "./homecontent/HeroServices";
import CommunityBanner from "./homecontent/CommunityBanner";
import ExperienceBoxes from "./homecontent/ExperienceBoxes";
import StreelancerSteps from "./homecontent/stepscontent";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import done from "../../images/done.png";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="hero-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={require("../../images/logo.png")} alt="Streelancer Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : "close"}`}>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>
            Find Work <MdKeyboardArrowDown />
          </li>
          <li onClick={() => setMenuOpen(false)}>
            Find Talent <MdKeyboardArrowDown />
          </li>
          <li onClick={() => setMenuOpen(false)}>Why Us</li>
          <li onClick={() => setMenuOpen(false)}>Community</li>
          <li> {isLoggedIn && (
          <div className="profile-dropdown-container desktop-only">
            <img
              src={require("../../images/profile.avif")} // Replace with actual profile picture if needed
              alt="Profile"
              className="profile-image"
              onClick={toggleDropdown}
            />
            <MdKeyboardArrowDown onClick={toggleDropdown} className="dropdown-arrow" />
            {showDropdown && (
              <div className="profile-dropdown" ref={dropdownRef}>
                <div className="dropdown-item"><RiEqualizerLine/>Account</div>
                <div className="dropdown-item"><CiSettings/>Settings</div>
                <div className="dropdown-item" onClick={handleLogout}>
                 <IoIosLogOut/> Log Out
                </div>
              </div>
            )}
          </div>
        )}</li>

          {isLoggedIn ? (
            <>
              {/* ✅ Show 3 options in mobile nav */}
              <li onClick={() => setMenuOpen(false)} className="mobile-only"><RiEqualizerLine/>Account</li>
              <li onClick={() => setMenuOpen(false)} className="mobile-only"><CiSettings/>Settings</li>
              <li
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="mobile-only"
              >
               <IoIosLogOut/> Log Out
              </li>
            </>
          ) : (
            <>
              <li onClick={() => setMenuOpen(false)}>
                <button
                  className="btn-clear"
                  onClick={() => navigate("/Signup")}
                >
                  Sign up
                </button>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <button
                  className="btn-clear2"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
              </li>
            </>
          )}
        </ul>

   
       

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <div>
          <h1>Hire. Train. Empower.</h1>
          <p>India's largest women-first platform for inclusive career building.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Register Now</button>
            <button className="btn-primary btn-outline">Join Academy</button>
          </div>
          <ul className="features">
            <li>
              <span>
                <img src={done} />
              </span>
              DEI-aligned, work-from-home talent
            </li>
            <li>
              <span>
                <img src={done} />
              </span>
              Vetted profiles, ready to get hired
            </li>
            <li>
              <img src={done} />
              Courses + mentorship for career returnees
            </li>
          </ul>
          </div>
        </div>

        <div className="hero-image">
          <img src={womanLaptop} alt="Woman with laptop" />
        </div>
      </section>

      <HeroServices />
      <ExperienceBoxes />
      <StreelancerSteps />
      <CommunityBanner />
    </div>
  );
};

export default HomePage;
