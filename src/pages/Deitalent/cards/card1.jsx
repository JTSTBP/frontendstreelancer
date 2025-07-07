import React, { useEffect } from "react";
import topWave from '../../../images/dei.png';
import { ArrowLeft } from 'lucide-react';

import { useLocation, useNavigate } from "react-router-dom";



const Deitalentbanner = () => {
      const navigate = useNavigate();
 
  return (
    <div>
 <div className="wave-section">
          
        <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
          
          <h1>Streelancer for Indian Enterprises</h1>
          <p>
          Flexible. Purpose-Driven. DEI-Compliant.
          </p>
        </div>
      </div>
   </div>
  );
};

export default Deitalentbanner;
