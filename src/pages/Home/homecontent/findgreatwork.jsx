import React, { useState, useEffect } from 'react';
import handshakeImage from '../../../images/findgreat.png';
import { useNavigate } from "react-router-dom";
import grt1 from "../../../images/grt1.png";
import grt2 from "../../../images/grt2.png";
import grt3 from "../../../images/grt3.png";
import grt4 from "../../../images/grt4.png";
import grt5 from "../../../images/grt5.png";
import grt6 from "../../../images/grt6.png";

// ✅ Reusable Card Component
const IndustryCard = ({ title, description, icon ,class:cardclass}) => {
   
  return (
    <div className={`${cardclass} findgreat-industry-card`}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="findgreat-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
    </div>
  );
};

const FindGreatWork = () => {
   const navigate = useNavigate();
  const cards = [
    {
      title: "Manufacturing & EMS",
      description: "Roles: Documentation, backend coordination, customer support.",
      icon: grt1,
      class:"blue"
    },
     {
      title: " Retail, D2C & E-Commerce",
      description: "Roles: Catalog management, customer queries, digital campaign assistants.",
      icon: grt2,
        class:"orange"
    },
     {
      title: "BFSI",
      description: "Roles: Customer care, document verification, tele-verification.",
      icon: grt4,
       class:"blue"
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Roles: Teleconsultation support, claims processing, regulatory documentation.",
      icon: grt3,
       class:"orange"
    },
   
   
    {
      title: "Logistics, Infrastructure & Construction",
      description: "Ticket desk, route support, virtual admins  Daily ops support with zero infra burden",
      icon: grt6,
        class:"blue"
    },

    {
      title: "FMCG & Consumer Goods",
      description: "Roles: Telesales, order processing, digital outreach, MIS reporting.",
      icon: grt5,
       class:"orange"
    }
  ]

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (cards.length / 2));
    }, 4000); // Auto change every 4s

    return () => clearInterval(interval);
  }, [cards.length]);

  const visibleCards = cards.slice(current * 2, current * 2 + 2);

  return (
    <div className="findgreat-work-container">
      <h2 className="findgreat-heading">Hire DEI-Verified Talent</h2>
      <p className="findgreat-subheading">
    Partner with skilled, diverse women to grow your business — while making a measurable impact.


      </p>
      <div className="findgreat-work-content">
        <div className="findgreat-industries-carousel">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === current ? "active" : ""
              }`}
              style={{ display: index === current ? "flex" : "none" }}
            >
              {visibleCards.map((card, i) => (
                <IndustryCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  class={card.class}
                />
              ))}
            </div>
          ))}
        
        </div>

        <div className="findgreat-image-container">
          <img src={handshakeImage} alt="Handshake" />
        </div>
      </div>
        <button className="findgreat-hire-now standard-btn" onClick={()=>{ navigate("/DEITalenthire")}}>Hire Now</button>
          <div className="carousel-dots">
            {[...Array(cards.length / 2)].map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === current ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
    </div>
  );
  
};

export default FindGreatWork;
