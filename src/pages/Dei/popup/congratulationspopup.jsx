// src/components/CongratulationsPopup.js
import React from 'react';

import medalIcon from '../../../images/medalicon.png';
import { useNavigate } from 'react-router-dom';

const CongratulationsPopup = () => {
  const navigate = useNavigate();

  const handleStayTuned = () => {
    navigate('/DEITalent');
  };

  return (
    <div className="congratulationspopup-overlay">
      <div className="congratulationspopup-container">
        <img src={medalIcon} alt="Medal" className="congratulationspopup-icon" />
        <h2 className="congratulationspopup-title">Congratulations</h2>
        <p className="congratulationspopup-message">
          Your DEI Score is getting ready and will be delivered to your inbox shortly.
        </p>
        <button className="congratulationspopup-button" onClick={handleStayTuned}>
          Stay tuned
        </button>
      </div>
    </div>
  );
};

export default CongratulationsPopup;
