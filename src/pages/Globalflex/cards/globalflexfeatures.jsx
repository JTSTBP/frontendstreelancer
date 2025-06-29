import React from 'react';
import bigCircle from '../../../images/circle2.png';
// import smallCircle from '../../../images/smallCircle.png';
import arrowCircle from '../../../images/arrow.png';

const GlobalFlexFeatures = () => {
  return (
    <div className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Why Choose Global Flex Network</h2>
        <p>
          Our global talent network connects forward-thinking companies with exceptional professionals
          for flexible remote positions worldwide.
        </p>

        <div className="image-stack">
          <img src={bigCircle} alt="Big Circle" className="big-circle" />
          {/* <img src={smallCircle} alt="Small Circle" className="small-circle" /> */}
         
        </div>
      </div>

      <div className="right-section">
        <div className="feature-item">
          <h3>1. Full-time Remote</h3>
          <p>
            Dedicated professionals working exclusively with your company.<br />
            40+ hrs/week | Long-term | Fully integrated
          </p>
        </div>
        <div className="feature-item">
          <h3>2. Project-based Work</h3>
          <p>
            Specialists for defined projects with clear goals.<br />
            Fixed deliverables | Milestone pay | Expert skills
          </p>
        </div>
        <div className="feature-item">
          <h3>3. Consulting Arrangements</h3>
          <p>
            Strategic advisors for high-level challenges.<br />
            Senior expertise | Flexible terms | Advisory focus
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFlexFeatures;
