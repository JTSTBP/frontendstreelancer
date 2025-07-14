


import React,  { useEffect, useRef } from 'react';

import arrowCircle from '../../../images/arrow.png';

const Deifeatures = ({ onTakeSurveyClick,onBookConsultClick }) => {
  return (
    <div className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Build a DEI-Ready Team Without the Hassle</h2>
        <p>
         Streelancer helps Indian companies hire verified, diverse women talent—returnees, homebound, and hybrid-ready—across remote, hybrid, and fractional roles. Backed by Jobs Territory, we provide a fully managed hiring experience.
        </p>

      
      </div>

      <div className="right-section">
        <div className="dei-container">
          <div className="dei-buttons">
            <button className="take-survey-btn" onClick={onTakeSurveyClick}>
             view Hiring modes 
            </button>
            <button className="book-session-btn" onClick={onBookConsultClick}>Book free consultation</button>
          </div>

         

          
        </div>
      </div>
    </div>
  );
};

export default Deifeatures;
