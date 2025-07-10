// HeroServices.js
import React from 'react';
import './homecontent.css';
import ServiceCard from './herocard';

import img1 from "../../../images/ourser1.png"
import img2 from "../../../images/ourser2.png"
import img3 from "../../../images/ourser3.png"



function HeroServices() {
  return (
    <section className="hero-services">
      <h2 className="hero-title">Our Services, Your Growth</h2>
      <p className="hero-subtitle">
        Get industry-ready with the right courses, gigs, and career tools — all in one place.
      </p>

      <div className="services-grid">
       
 <ServiceCard
          title="DEI Impact"
          className="bluecard"
          subtitle="Score Card"
          points={[
            "Personalized journey based on your career goals and experience.",
            "AI-powered skill assessment, custom recommendations, and career path mapping."
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
            "Match with freelance gigs or part-time roles based on your skills and goals.",
            "Writer, Designer, Virtual Assistant (VA), SDR & more."
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
            "Industry-relevant courses for women, queer professionals, returnees, and the silver generation.",
            "Hands-on learning, live mentorship, real-world projects, and certifications."
          ]}
      
          mainImage={img3}
          
       navigateTo="/Academy"
          altText="Academy"
        />
       {/* <ServiceCard
          title="Remote Woman"
          className="bluecard"
          subtitle="Workforce."
          points={[
            "Access pre-vetted, remote-ready women across industries",
            "HFast closures, flexible formats, zero infra cost."
          ]}
          
          mainImage={img4}
          
          altText="Academy"
          customStyle={{ marginTop: "40px" }} 
        /> */}
      </div>
    </section>
  );
}

export default HeroServices;
