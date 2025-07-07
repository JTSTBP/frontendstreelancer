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
      title: "EdTech",
      description: "Admissions callers, academic support\nCX desks for hybrid and online education",
      icon: grt1,
      class:"blue"
    },
    {
      title: "Healthcare",
      description: "Regulatory desk, support execs\nHybrid helpdesks for pharma & wellness",
      icon: grt2,
       class:"orange"
    },
    {
      title: "Retail",
      description: "Customer engagement, in-store support\nOmnichannel CX solutions",
      icon: grt3,
        class:"blue"
    },
    {
      title: "FinTech",
      description: "KYC support, digital onboarding\nFinancial product assistance",
      icon: grt4,
       class:"orange"
    },
    {
      title: "Logistics",
      description: "Fleet tracking, delivery updates\nCustomer queries resolution",
      icon: grt5,
        class:"blue"
    },
    {
      title: "Travel & Tourism",
      description: "Booking help, itinerary changes\nReal-time chat & support",
      icon: grt6,
       class:"orange"
    },
  ];

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
      <h2 className="findgreat-heading">Find Great Work</h2>
      <p className="findgreat-subheading">
        Meet Clients you’re excited to work with and take your career or business to new heights
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
        <button className="findgreat-hire-now" onClick={()=>{ navigate("/DEITalenthire")}}>Hire Now</button>
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
