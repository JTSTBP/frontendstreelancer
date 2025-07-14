import React from 'react';
import girlImage from '../../../images/certificate.png'; // replace with your image path
import step1 from "../../../images/trust1.png"

import step2 from "../../../images/trust3.png"
import step3 from "../../../images/trust2.png"


const Deitrust = () => {
  const steps = [
    {
      title: 'Boost Reputation & Employer Brand',
      description:
        'Show you re serious about inclusion with a recognized badge.',
       color:"#ECEAEA",
       img:step1
    },
    {
      title: 'Attract Great Talent',
      description:
        'Inclusive workplaces draw diverse, high-performing teams.',
        color:"#F1D3D0",
          img:step2
    },
    {
      title: 'Stand Out in the Market',
      description:
        'Show your commitment to diversity and stand out as a forward-thinking, trusted brand.',
         color:"#ECEAEA"
         ,  img:step3
    },
  
  ];

  return (
    <div className="howitworks-container dei-trust">
        <h1>Join a Trusted Network</h1>
        <p className="subtitle">
         Be listed on certified DEI employer directories, increasing your   
                                            visibility and trust.
        </p>
        <div className='howitworks-content'>
         <div className="howitworks-image">
        <img src={girlImage} alt="Girl with laptop" />
      </div>
      <div className="howitworks-text">
        <h1 className='why'>Why Get Certified?</h1>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step-box" key={index}  style={{ backgroundColor: step.color }}>
              <div className="step-number"><img src={step.img}/></div>
              <div className="step-content">
                <h1>{step.title}</h1>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
};

export default Deitrust;
