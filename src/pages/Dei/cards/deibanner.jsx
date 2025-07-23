import React, { useEffect } from "react";
import topWave from '../../../images/sambg2.png';
import { ArrowLeft } from 'lucide-react';



import { useLocation, useNavigate } from "react-router-dom";



const Deibanner = () => {
      const navigate = useNavigate();
 
  return (
    <div>
 <div className="wave-section">
          
        <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
          
          <h1>Check Your Workplace Inclusion. Get Your DEI Score.</h1>
          <p>5-minute survey. Benchmark your DEI. Earn a badge.</p>
        </div>
      </div>
   </div>
  );
};

export default Deibanner;
