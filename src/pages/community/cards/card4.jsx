import React from 'react';
import icon1 from "../../../images/twoption1.png"
import icon2 from "../../../images/twoption2.png"




const TwoOptionsSection = () => {
  return (
    <div className="TwoOptionsSection-section">
      <div className="TwoOptionsSection-card">
        <h3>Looking for Skilled, DEI-Verified Talent?</h3>
        <div className="TwoOptionsSection-icon-section">
        
          <img className='twooption-img' src={icon1}/>
        </div>
        <button className="cta-button">Hire Now</button>
      </div>

      <div className="TwoOptionsSection-card">
        <h3>Want to Become Job-Ready & Work Remotely?</h3>
        <div className="TwoOptionsSection-icon-section">
              <img className="twooption-img2" src={icon2}/>
        </div>
        <button className="cta-button">Register Now</button>
      </div>
    </div>
  );
};

export default TwoOptionsSection;
