import React from 'react';
import gold from "../../../images/goldbag.png"
import silver from "../../../images/silverbag.png"
import bronze from "../../../images/brobag.png"


const DEIBadges = () => {
  return (
    <div className="dei-badges-container">
      <h2>Your DEI Achievement Badge</h2>
      <p className="subheading">
        Showcase your commitment to diversity, equity, and inclusion with tangible credentials
      </p>

      <div className="badges">
        <img src={gold}/>
         <img src={silver}/>
          <img src={bronze}/>
    
      
      </div>

      <div className="description-box">
        Each badge level represents your organization's progress on the DEI journey. Badges can be displayed on your website, recruitment materials, and corporate communications to showcase your commitment to creating an inclusive workplace.
      </div>
    </div>
  );
};

export default DEIBadges;
