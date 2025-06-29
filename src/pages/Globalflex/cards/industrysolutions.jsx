import React from 'react';
import tech from '../../../images/ind1.png';
import business from '../../../images/ind2.png';
import sales from '../../../images/ind3.png';
import support from '../../../images/ind4.png';
import global from '../../../images/ind5.png';
import creative from '../../../images/ind6.png';

const solutions = [
  {
    title: 'Technology & Innovation',
    image: tech,
    color: 'ind1',
    list: ['Software Engineers', 'Data Scientists', 'DevOps & Cloud Experts', 'Product Managers & Designers'],
  },
  {
    title: 'Business Services',
    image: business,
    color: 'ind2',
    list: ['Executive Assistants', 'Finance & Accounting Experts', 'HR & Recruitment Specialists', 'Operations & Project Managers'],
  },
  {
    title: 'Sales & Marketing',
    image: sales,
    color: 'ind3',
    list: ['Digital Marketers', 'Sales Representatives', 'SEO/SEM Specialists', 'Social Media Managers'],
  },
  {
    title: 'Operations & Support',
    image: support,
    color: 'ind4',
    list: ['Customer Success Managers', 'Technical Support Specialists', 'Client Relationship Managers', 'Multilingual Support Teams'],
  },
  {
    title: 'Global Expansion',
    image: global,
    color: 'ind5',
    list: ['International Business Consultants', 'Localization Specialists', 'Global Compliance Experts', 'Cross-cultural Trainers'],
  },
  {
    title: 'Creative & Design',
    image: creative,
    color: 'ind6',
    list: ['UX/UI Designers', 'Graphic Designers & Illustrators', 'Copywriters & Content Creators', 'Video Editors & Animators'],
  },
];

const IndustrySolutions = () => {
  return (
    <div className="industry-container">
      <h2>Industry Solutions</h2>
      <p className="subtitle">
        Specialized talent solutions tailored to the unique requirements of your industry.
      </p>
      <div className="cards-container">
        {solutions.map((item, index) => (
          <div className= {`solution-card ${item.color}`}key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((role, i) => (
                <li key={i}>▶ {role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySolutions;
