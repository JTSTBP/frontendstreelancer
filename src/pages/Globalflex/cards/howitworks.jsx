import React from 'react';
import girlImage from '../../../images/howgirl.png'; // replace with your image path
import step1 from "../../../images/step1.png"
import step2 from "../../../images/step2.png"
import step3 from "../../../images/step3.png"
import step4 from "../../../images/step4.png"

const HowItWorks = () => {
 const steps = [
  {
    title: 'Share Role Requirements',
    description:
      "Tell us about your business needs and the specific roles you're looking to fill.",
    color: '#f8d7e0',
    img: step1, // Assuming you're using the same step image variable names
  },
  {
    title: 'Get Vetted Profiles',
    description:
      "We’ll match you with pre-screened professionals who have the skills and experience you need.",
    color: '#e5d8f6',
    img: step2,
  },
  {
    title: 'Onboard in 72 Hours',
    description:
      'We manage performance and daily operations, so you can focus on outcomes and business growth.',
    color: '#f8d7e0',
    img: step3,
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
