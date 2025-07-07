import React from 'react';
import bigCircle from '../../../images/circle2.png';
// import smallCircle from '../../../images/smallCircle.png';
import arrowCircle from '../../../images/arrow.png';

const GlobalFlexFeatures = () => {
  return (
    <div className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Why Streelancer Remote Talent?</h2>
        <p>
          Our global talent network connects forward-thinking companies with exceptional professionals for flexible remote positions worldwide.
        </p>

        <div className="image-stack">
          <img src={bigCircle} alt="Big Circle" className="big-circle" />
          {/* <img src={smallCircle} alt="Small Circle" className="small-circle" /> */}
         
        </div>
      </div>

      <div className="right-section">
        <div className="feature-item">
          <h3>1. Managed Service</h3>
          <p>
           We hire, onboard & manage your team, so you can<br/>focus on your core business.
          </p>
        </div>
        <div className="feature-item">
          <h3>2. Flexible Hiring</h3>
          <p>
           Choose from full-time, project-based, or consulting<br/>roles to match your needs.
          </p>
        </div>
        <div className="feature-item">
          <h3>3. Cost-Saving</h3>
          <p>
           Save up to 40% over in-house teams without<br/>compromising on quality.
          </p>
        </div>
        <div className="feature-item">
          <h3>4. Quick-Start</h3>
          <p>
          Deploy trained talent in just 72 hours and<br/>accelerate your business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFlexFeatures;
