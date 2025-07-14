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
              Fully managed, inclusive women talent — curated, verified, and delivered in just 72 hours.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary standard-btn" onClick={()=>{ navigate("/DEITalenthire")}}>Hire Now</button>
              <button className="btn-primary btn-outline standard-btn" onClick={()=>{ navigate("/Registration")}}>Register Now</button>
            </div>
            <ul className="features">
              <li>
                <span>
                  <img src={require("../../images/done.png")} />
                </span>
                DEI-aligned, work-from-home talent
              </li>
              <li>
                <span>
                  <img src={require("../../images/done.png")} />
                </span>
                Vetted profiles, ready to get hired

              </li>
              <li>
                <img src={require("../../images/done.png")} />
                Career returnee support through courses & mentorship

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
      <CommunityBanner />
    </div>
  );
};

export default HomePage;
