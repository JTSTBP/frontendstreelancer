import React from 'react';
import google from "../../../../images/globel.png"

const Card3

 = () => {
  return (
    <div className="public-card dei-badge-card">
      <h3>Public Showcase</h3>
      <p>
        Be featured in our directory of DEI-committed organizations and gain recognition in industry
        publications and events.
      </p>

      <div className="icon-grid">
        <div className="icon-box">🤝</div>
        <div className="icon-box">📡</div>
        <div className="icon-box">🎤</div>
        <div className="icon-box">🏆</div>
        <div className="icon-box">🔊</div>
        <div className="icon-box">💾</div>
      </div>

    <div className="icon-circle">
          <img className="target-icon" src={google}/>
          </div>
        </div>
  );
};

export default Card3

;
