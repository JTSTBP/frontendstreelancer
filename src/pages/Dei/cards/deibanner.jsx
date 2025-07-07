import React, { useEffect } from "react";
import topWave from '../../../images/dei.png';
import { ArrowLeft } from 'lucide-react';



import { useLocation, useNavigate } from "react-router-dom";



const Deibanner = () => {
      const navigate = useNavigate();
 
  return (
    <div>
 <div className="wave-section">
          
        <img src={topWave} alt="Top Wave" className="top-wave" />
        
        <div className="text-overlay">
          
          <h1>How Inclusive Is Your Workplace?<br/> Take the DEI Score Test</h1>
          <p>
          Measure, benchmark, and improve your organization's Diversity, Equity, and Inclusion metrics with our comprehensive assessment tool.
          </p>
        </div>
      </div>
   </div>
  );
};

export default Deibanner;
