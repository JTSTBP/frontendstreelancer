import React from "react";
import inset1 from "../../../images/inser1.png"
import inset2 from "../../../images/inser2.png"
import inset3 from "../../../images/inser3.png"
import inset4 from "../../../images/inser4.png"


const steps = [
  {
    number: 1,
    title: "Share Your Need",
    description: "Fill out our requirement form or schedule a free consultation to discuss your hiring needs",
    image: inset1,
  },
  {
    number: 2,
    title: "We Shortlist & Onboard",
    description: "Our team identifies the best candidates and completes the onboarding process in 5-7 days",
    image:inset2,
  },
  {
    number: 3,
    title: "You Manage Work",
    description: "Focus on your core business while we handle administrative and coordination tasks",
    image: inset3,
  },
  {
    number: 4,
    title: "Track Impact",
    description: "Monitor performance and DEI impact through our comprehensive monthly dashboards",
    image: inset4,
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-subtitle">
        Our streamlined process makes hiring diverse talent simple and efficient
      </p>
      <div className="graph-container">
       

        {steps.map((step, index) => (
          <div className="graph-step" key={step.number}>
            <div className="graph">
            <div className="graph-circle">
              <img src={step.image} alt={`graph-Step ${step.number}`} />
              <span className="graph-step-number">{step.number}</span>
            </div>
            </div>
            <h3 className="graph-step-title">{step.title}</h3>
            <p className="graph-step-desc">{step.description}</p>
          </div>
        ))}
      

      </div>

{/* 
      <div className="graph-container">
  {steps.map((step, index) => (
    <React.Fragment key={step.number}>
      <div className="graph-step">
        <div className="graph">
          <div className="graph-circle">
            <img src={step.image} alt={`graph-Step ${step.number}`} />
            <span className="graph-step-number">{step.number}</span>
          </div>
        </div>
        <h3 className="graph-step-title">{step.title}</h3>
        <p className="graph-step-desc">{step.description}</p>
      </div>

  
      {index < steps.length - 1 && (
        <div className={`connector-line connector-${index}`}></div>
      )}
    </React.Fragment>
  ))}
</div> */}

    </section>
  );
};

export default HowItWorks;
