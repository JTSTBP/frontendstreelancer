import React from 'react';
import tech from '../../../images/ind1.png';
import business from '../../../images/ind2.png';
import sales from '../../../images/ind3.png';
import support from '../../../images/ind4.png';
import global from '../../../images/ind5.png';
import creative from '../../../images/ind6.png';

const solutions = [
  {
    title: 'Startups & SaaS',
    image: tech,
    color: 'ind1',
    list: [
      'SDRs & Business Development',
      'Client Success Management',
      'Lead Generation & Qualification',
      'Technical Support & Onboarding',
    ],
  },
  {
    title: 'EdTech & Training',
    image: business,
    color: 'ind2',
    list: [
      'Academic Sales Representatives',
      'LMS Administration & Support',
      'Social Media Management',
      'Student Onboarding & Engagement',
    ],
  },
  {
    title: 'Real Estate & Property',
    image: sales,
    color: 'ind3',
    list: [
      'CRM Administration & Management',
      'Inside Sales & Lead Qualification',
      'Customer Support & Inquiries',
      'Documentation & Transaction Support',
    ],
  },
  {
    title: 'FMCG & Consumer Goods',
    image: support,
    color: 'ind4',
    list: [
      'Sales & Distribution Support',
      'MIS Analysis & Reporting',
      'Supply Chain Back Office Operations',
      'Social Media & Digital Marketing',
    ],
  },
  {
    title: 'Life Sciences & Healthcare',
    image: global,
    color: 'ind5',
    list: [
      'Claims Processing & Management',
      'Medical Documentation (Non-Clinical)',
      'Telehealth Support & Coordination',
      'Patient Engagement & Follow-up',
    ],
  },
  {
    title: 'Manufacturing & Industrial',
    image: creative,
    color: 'ind6',
    list: [
      'Sales Support & Order Processing',
      'Quality Assurance Documentation',
      'Marketing Campaign Assistance',
      'Operations & Logistics Support',
    ],
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
