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
      We hire, onboard, and oversee your team so you can<br />
      focus on your core business.
    </p>
  </div>
  <div className="feature-item">
    <h3>2. Flexible Hiring</h3>
    <p>
      Full-time, project-based, or consulting —<br />
      choose what fits your needs.
    </p>
  </div>
  <div className="feature-item">
    <h3>3. Cost Savings</h3>
    <p>
      Save up to 40% compared to in-house teams<br />
      without compromising on quality.
    </p>
  </div>
  <div className="feature-item">
    <h3>4. Quick Start</h3>
    <p>
      Deploy trained talent within 72 hours and<br />
      accelerate your growth.
    </p>
  </div>
</div>

    </div>
  );
};

export default GlobalFlexFeatures;
