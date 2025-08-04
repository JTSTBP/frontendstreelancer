import React from "react";
import tech from "../../../images/ind1.png";
import business from "../../../images/ind2.png";
import sales from "../../../images/ind3.png";
import support from "../../../images/ind4.png";
import global from "../../../images/ind5.png";
import creative from "../../../images/ind6.png";

const solutions = [
  {
    title: "🚀 Startups & SaaS",
    image: tech,
    color: "ind1",
    list: [
      "SDRs & Business Development",
      "Client Success & CRM Support",
      " Technical Onboarding & Helpdesk",
    ],
  },
  {
    title: "📱 Digital Media & Marketing",
    image: business,
    color: "ind2",
    list: [
      "Social Media Management",
      "Content Writing & Copywriting",
      "Graphic Design & Campaign Support",
    ],
  },
  {
    title: "💻 Technology & IT Services",
    image: sales,
    color: "ind3",
    list: [
      "Application Support & QA",
      "Technical Documentation",
      "Web & CMS Maintenance",
    ],
  },
  {
    title: "🛒 E-commerce & Retail",
    image: support,
    color: "ind4",
    list: [
      "Catalog Management & Order Processing",
      "Customer Service & Live Chat",
      "Digital Marketing & MIS",
    ],
  },
  {
    title: "🏥 Healthcare & Life Sciences",
    image: global,
    color: "ind5",
    list: [
      "Claims & Patient Coordination",
      "Telehealth Admin & Documentation",
      "Non-clinical Support Roles",
    ],
  },
  {
    title: "🎓 Education & EdTech",
    image: creative,
    color: "ind6",
    list: [
      "Academic Sales & Student Onboarding",
      "LMS Administration",
      "Community Engagement & Social",
    ],
  },
];

const IndustrySolutions = () => {
  return (
    <div className="industry-container">
      <h2>Industries We Serve</h2>
      <p className="subtitle">
        Your Industry, Our Expertise — Delivered Remotely. Flexible, managed
        talent solutions tailored to your business needs.
      </p>
      <div className="cards-container">
        {solutions.map((item, index) => (
          <div className={`solution-card ${item.color}`} key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((role, i) => (
                <li key={i}>✔ {role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySolutions;
