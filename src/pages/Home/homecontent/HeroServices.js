// HeroServices.js
import React from 'react';
import './homecontent.css';
import ServiceCard from './herocard';

import img1 from "../../../images/offer1.png"
import img2 from "../../../images/offer2.png"
import img3 from "../../../images/offer3.png"



function HeroServices() {
  return (
    <section className="hero-services">
      <h2 className="hero-title">What We Offer
</h2>
      <p className="hero-subtitle">
       Everything you need to build skills, hire talent, and drive impact — all in one place.
      </p>

      <div className="services-grid">
       
 <ServiceCard
          title="DEI Impact"
          className="bluecard"
          subtitle="Score Card"
          points={[
          
            "Measure and benchmark your workplace inclusion with actionable insights."
          ]}
          
           mainImage={img1}
       navigateTo="/DEITalent"
          altText="Marketplace"
        />

        <ServiceCard
          title="Remote"
          className="pinkcard gap-ordcard"
          subtitle="Talent Network"
          points={[
            "Hire pre-vetted, remote-ready women professionals — fast and hassle-free.",
           
          ]}
          
           mainImage={img2}
      navigateTo="/Remotetalent"
          altText="Marketplace"
        />
       
                <ServiceCard
          title="Academy"
          className="orgcard"
          subtitle="Learn New Skills"
          points={[
            
            "Upskill and get placement-ready for high-demand, industry-relevant roles."
          ]}
      
          mainImage={img3}
          
       navigateTo="/Academy"
          altText="Academy"
        />
     
      </div>
    </section>
  );
}

export default HeroServices;
