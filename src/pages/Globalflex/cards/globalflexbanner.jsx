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
         
          <h1>Hire Smarter. Scale Faster. Work Remote.</h1>
          <p>
           Build your business with pre-trained, reliable remote professionals — fully managed by Streelancer. Trusted by startups and SMEs to scale ops 30–40% cheaper, with no quality compromise.

          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFlexNetwork;
