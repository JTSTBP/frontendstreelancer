import React from "react";
import comm1 from "../../../images/comm1.png"
import comm2 from "../../../images/comm2.png"
import comm3 from "../../../images/comm3.png"
import bg from "../../../images/communitybg.png"

import lines3497 from '../../../images/Group 1000004638.png';
import lines23497 from '../../../images/Group 1000004637.png'; 


const CommunitySection = () => {
  return (
    <section className="communitysection">
  
      <div className="communitysection-badge">+100 community of active people</div>

      <h1 className="communitysection-title">
        Be Part of a Purpose-Driven Community <br />
        <span>Redefining the Future of Work</span>
      </h1>

      <p className="communitysection-description">
        Connect with changemakers, explore stories, share resources, and grow
        with a network built for inclusive, second-career, and diverse talent.
      </p>

      <div className="communitysection-cta-buttons">
        <button className="communitysection-btn primary">Join as an Organization</button>
        <button className="communitysection-btn outline">Join as an Individual</button>
      </div>
         <img src={lines23497} alt="Lines" className="lines-image23497" />
     

        <img src={lines3497} alt="Lines" className="lines-image3497" />
   
      <div className="communitysection-info-cards">
        <div className="communitysection-card">
          <img src={comm1} alt="Upcoming Events" />
          <div className="communitysection-card-label">Upcoming Events</div>
        </div>
        <div className="communitysection-card">
          <img src={comm2} alt="New Courses" />
          <div className="communitysection-card-label">New Courses & Upskilling</div>
        </div>
        <div className="communitysection-card">
          <img src={comm3} alt="Community Announcements" />
          <div className="communitysection-card-label">Community Announcements</div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
