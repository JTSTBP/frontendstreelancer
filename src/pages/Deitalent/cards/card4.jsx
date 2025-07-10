import React from "react";

import houseIcon from "../../../images/baloon.png"
import Bank from "../../../images/ser1.png"
import ShoppingCart from "../../../images/ser2.png"
import HeartPulse from "../../../images/ser3.png"
import Truck from "../../../images/ser4.png"
import Laptop from "../../../images/ser5.png"
import GraduationCap from "../../../images/ser6.png"
import ShoppingBag from "../../../images/ser7.png"

const industries = [
  {
    title: "BFSI",
    description: "KYC operations, customer support, documentation processing",
    icon: Bank 
  },
  {
    title: "FMCG",
    description: "Sales support, inventory management, customer engagement",
    icon: ShoppingCart 
  },
  {
    title: "Healthcare",
    description: "Patient coordination, appointment scheduling, CX support",
    icon: HeartPulse
  },
  {
    title: "Logistics",
    description: "Order tracking, dispatch coordination, customer updates",
    icon: Truck
  },
  {
    title: "Technology",
    description: "Technical support, documentation, QA testing",
    icon: Laptop
  },
  {
    title: "EdTech",
    description: "Student engagement, course management, content support",
    icon: GraduationCap
  },
  {
    title: "Retail",
    description: "Catalog management, chat operations, order processing",
    icon: ShoppingBag
  }
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>
      <p className="industries-subtitle">
        Our trained talent fits seamlessly into various sectors, providing specialized skills for each industry.
      </p>

      <div className="industries-content">
        <div className="industries-image">
          <img src={houseIcon} alt="Light Bulb Illustration" />
        </div>

        <div className="industries-cards">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
                <div>
                      <img src={industry.icon}/>
       
              <h4 className="card-title">{industry.title}</h4>
                </div>
              
              <p className="card-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
