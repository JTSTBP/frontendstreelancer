import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Optional: Use any icon library or SVG

import topWave from '../../../images/sambg1.png';

const GlobalFlexNetwork = () => {
  const navigate = useNavigate();

  return (
    <div className="global-flex-container">
      {/* Back Arrow */}
    

      <div className="wave-section">
          
        <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
         
          <h1>Hire DEI-Aligned Women Talent — Managed & Ready.</h1>
          <p>
         Vetted, flexible, fully managed teams delivered in 72 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFlexNetwork;
