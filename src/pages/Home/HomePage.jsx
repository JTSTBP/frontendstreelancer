import React, { useEffect, useState } from "react";
import "./home.css";
import womanLaptop from "../../images/girl.png";

import HeroServices from "./homecontent/HeroServices";
import CommunityBanner from "./homecontent/CommunityBanner";
import ExperienceBoxes from "./homecontent/ExperienceBoxes";
import StreelancerSteps from "./homecontent/stepscontent";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import FindGreatWork from "./homecontent/findgreatwork";
import FAQSection from "./homecontent/faqs";
 // Adjust the path as needed

const HomePage = () => {
   const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="hero-container">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <div>
            <h1>Hire Smarter. Hire Women.
</h1>
            <p>
            Remote, Hybrid & Fractional. Vetted. Managed. Ready in 72 hours.

            </p>
            <div className="hero-buttons">
              <button className="btn-primary standard-btn" onClick={()=>{ navigate("/DEITalenthire")}}>Hire Talent </button>
              <button className="btn-primary btn-outline standard-btn" onClick={()=>{ navigate("/Signup")}}>Register Now</button>
            </div>
            <ul className="features">
              <li>
                <span>
                  <img src={require("../../images/done.png")} />
                </span>
               Fully managed — no HR hassle
              </li>
              <li>
                <span>
                  <img src={require("../../images/done.png")} />
                </span>
                Remote, Hybrid & Fractional models

              </li>
              <li>
                <img src={require("../../images/done.png")} />
               DEI-aligned, vetted professionals

              </li>
            </ul>
          </div>
        </div>

        <div className="hero-image">
          <img src={womanLaptop} alt="Woman with laptop" />
        </div>
      </section>
     <FindGreatWork/>
      <HeroServices />
 
      <ExperienceBoxes />
      <StreelancerSteps />
      <FAQSection/>
      <CommunityBanner />
    </div>
  );
};

export default HomePage;
