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
          <div className="back-arrow" onClick={() => navigate("/")}>
        <ArrowLeft size={24} />
       
      </div>
          <h1>Global Flex Network<br />Borderless Talent Solutions</h1>
          <p>
            Access a diverse global network of flexible talent across time zones, cultures, and
            specializations. Build your borderless team with our vetted professionals ready for remote
            collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFlexNetwork;
