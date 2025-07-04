import React from 'react';
import card2img from "../../../../images/card2img.png"


const Card2 = () => {
  return (
    <div className="hiring-card dei-badge-card">
      <h3>Hiring Impact Visibility</h3>
      <p>
        Attract top diverse talent by demonstrating your commitment to creating an inclusive
        workplace environment.
      </p>

      <div className="application-stats">
        <div className="stat-row">
          <span>Candidate Applications</span>
          <span className="stat-percent">+32%</span>
        </div>
        <div className="stat-row">
          <span>Candidate Applications</span>
          <span className="stat-percent">+47%</span>
        </div>
        <div className="stat-row">
          <span>Candidate Applications</span>
          <span className="stat-percent">+28%</span>
        </div>
      </div>

      <div className="icon-circle">
      <img className="target-icon" src={card2img}/>
      </div>
    </div>
  );
};

export default Card2;
