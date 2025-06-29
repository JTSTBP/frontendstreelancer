import React from 'react';
import girlImage from '../../../images/howgirl.png'; // replace with your image path
import step1 from "../../../images/step1.png"
import step2 from "../../../images/step2.png"
import step3 from "../../../images/step3.png"
import step4 from "../../../images/step4.png"

const HowItWorks = () => {
  const steps = [
    {
      title: 'Talent Assessment',
      description:
        'Rigorous vetting of skills, language, adaptability, and remote readiness.',
       color:"#eceaea73",
       img:step1
    },
    {
      title: 'Skills Matching',
      description:
        'AI-driven matching ensures the right technical and cultural fit.',
        color:"#F1D3D0",
          img:step2
    },
    {
      title: 'Cultural Alignment',
      description:
        'We assess for value alignment and cross-cultural communication skills.',
         color:"#eceaea73"
         ,  img:step3
    },
    {
      title: 'Onboarding Support',
      description:
        'Smooth integration with training, tools, and timezone support.',
         color:"#FFEFEE",
           img:step4
    },
  ];

  return (
    <div className="howitworks-container">
        <h1>How It Works</h1>
        <p className="subtitle">
          Our streamlined process connects you with the right global talent for your specific needs.
        </p>
        <div className='howitworks-content'>
         <div className="howitworks-image">
        <img src={girlImage} alt="Girl with laptop" />
      </div>
      <div className="howitworks-text">
        
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

export default HowItWorks;
