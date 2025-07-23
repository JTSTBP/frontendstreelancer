import React from "react";
import blog1 from "../../../images/blog1.png"
import blog2 from "../../../images/blog2.png"
import blog3 from "../../../images/blog3.png"
import { useNavigate } from 'react-router-dom';

const blogData = [
  {
    image: blog1, // replace with actual image path
    heading: "Talent Acquisition",
    title: "Not Sure Which Hiring Strategy Fits You Best?",
    description:
      "From quick staffing to strategic talent acquisition, we tailor solutions that grow with your business.",
      navigate:"/Community/foundermistake"
  },
  {
    image: blog2,
    heading: "Attitude vs Skill",
    title: "Attitude or Skill? Why Not Both.",
    description:
      "Future-ready teams need more than just qualifications—they need the right mindset and build a team that grows with you.",
          navigate:"/Community/Skills"
  },
 
  {
    image:blog3,
    heading: "",
    title: "Hiring Doesn’t Have to Be a Guessing Game",
    description:
      "Avoid common hiring pitfalls, tap into industry expertise, and scale your team the right way from day one.",
        navigate:"/Community/Talent"
  },
];

const CommunityBlog = () => {
    const navigate=useNavigate()
  return (
    <section className="communityblog">
      <h2>Paid Microprojects</h2>
      <p className="communityblog-subtext">
        Insights, journeys, and ideas — written by and for the Streelancer
        network.
      </p>

      <div className="communityblog-cards-wrapper">
        <button className="communityblog-arrow">&#10094;</button>
        <div className="communityblog-cards">
          {blogData.map((item, index) => (
            <div className="communityblog-card" key={index}>
              <div className="communityblog-image-container">
                <img src={item.image} alt={item.title} />
                {item.heading && (
                  <div className="communityblog-heading">{item.heading}</div>
                )}
              </div>
              <div className="communityblog-title">{item.title}</div>
              <div className="communityblog-desc">{item.description}</div>
              <button className="communityblog-learn-more" onClick={() => navigate(item.navigate)}>Learn More</button>
            </div>
          ))}
        </div>
        <button className="communityblog-arrow">&#10095;</button>
      </div>
    </section>
  );
};

export default CommunityBlog;
