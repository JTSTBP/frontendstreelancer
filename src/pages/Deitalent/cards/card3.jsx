import React from 'react';
import icon1 from "../../../images/choose1.png"
import icon2 from "../../../images/choose2.png"
import icon3 from "../../../images/choose3.png"
import icon4 from "../../../images/choose4.png"
import icon5 from "../../../images/choose5.png"
import icon6 from "../../../images/choose6.png"

const features = [
  {
    title: "Verified Talent Pool",
    desc: "Access 10,000+ talent jobs, ready across professional roles, seniority levels and experience levels.",
    icon: icon1
  },
  {
    title: "DEI Compliance",
    desc: "Comprehensive DEI standards and employer badges to showcase your commitment to diversity and inclusion.",
    icon: icon2
  },
  {
    title: "Smart Workdays",
    desc: "Our 4-hour workday model ensures higher productivity, better work-life balance, and increased loyalty.",
    icon: icon3
  },
  {
    title: "Quality Roles",
    desc: "Our 5-step vetting model ensures verified roles, credible employers, and increased loyalty.",
    icon: icon4
  },
  {
    title: "Fully Managed",
    desc: "We handle onboarding, coordination, and streamlined work delivery, so you focus on core business.",
    icon: icon5
  },
  {
    title: "Impact Tracking",
    desc: "Monthly DEI dashboards to measure and showcase the impact of your inclusive hiring practices.",
    icon: icon6
  }
];

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <div className="why-left">
        <h2>Why Choose Us</h2>
        <p className="why-subtext">
          Our platform offers unique advantages for businesses looking to build diverse, flexible teams
        </p>

        <div className="why-cards">
          {features.map((item, idx) => (


<div className="dei-badge-card " key={idx}>
        <h3>{item.title}</h3>
                <p>{item.desc}</p>
      <div className="icon-circle">
           <img className="target-icon" src={item.icon}/>
           </div>
    </div>
            
           
          ))}
        </div>
      </div>

      {/* <div className="why-right">
        <div className="why-box">
          <h1 className="why-title">WHY</h1>
          <div className="vertical-text">CHOOSE US?</div>
          <div className="dots">
            {[...Array(5)].map((_, i) => (
              <div className="dot" key={i}></div>
            ))}
          </div>
        </div>
      </div> */}

      <div className='shape-box'>
        <div className='m'></div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

