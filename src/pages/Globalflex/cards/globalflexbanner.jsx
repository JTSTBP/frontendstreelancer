import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Optional: Use any icon library or SVG

import topWave from '../../../images/global.png';

const GlobalFlexNetwork = () => {
  const navigate = useNavigate();

  return (
    <div className="global-flex-container">
      {/* Back Arrow */}
    

      <div className="wave-section">
          
        <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
         
          <h1>Hire Remote. Stay Focused. Scale Smarter.</h1>
          <p>
          Streelancer helps you fill remote roles with pre-trained, verified talent — flexible, cost-efficient, and fully managed for your business needs.

          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFlexNetwork;
