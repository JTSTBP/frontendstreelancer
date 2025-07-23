import React from 'react';
import bigCircle from '../../../images/circle2.png';
// import smallCircle from '../../../images/smallCircle.png';
import arrowCircle from '../../../images/arrow.png';

const GlobalFlexFeatures = () => {
  return (
    <div className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Why Hire With Us</h2>
        <p>
        Build your team in just 72 hours and save up to 40% without compromising quality.
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
      We hire, onboard, and manage your team for you.
    </p>
  </div>
  <div className="feature-item">
    <h3>2. Flexible Hiring</h3>
    <p>
    Full-time, project-based, or consulting — you choose.
    </p>
  </div>
  <div className="feature-item">
    <h3>3. Cost Savings</h3>
    <p>
     Save up to 40% vs in-house.
    </p>
  </div>
  <div className="feature-item">
    <h3>4. Quick Start</h3>
    <p>
      Deploy trained talent within 72 hours.
    </p>
  </div>
</div>

    </div>
  );
};

export default GlobalFlexFeatures;
