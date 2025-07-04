import React from 'react';
import RemoteCard from './carditem1';

import hir1 from "../../../images/hir1.png"
import hir2 from "../../../images/hir2.png"
import hir3 from "../../../images/hir3.png"
import hir4 from "../../../images/hir4.png"
import hir5 from "../../../images/hir4.png"

const hiringModelsData = {
  fullTimeRemote: {
    title: "Full-Time Remote",
    icon: hir1, // Replace with your actual icon path
    featuresList: [
      "Roles: Inside Sales, Web Support, Social Media",
      "100% work-from-home with no infra cost",
      "Streelancer handles hiring, onboarding & coordination",
      "Reliable, DEI-aligned women talent",
    ],
  },
  hybridTalent: {
    title: "Hybrid Talent",
    icon:  hir2,
    featuresList: [
      "Roles: Sales Support, Tech Onboarding, SEO & Content",
      "Flexible mix of in-office & remote work",
      "Ideal for coordination-heavy or training roles",
      "Combines local access with remote efficiency",
    ],
  },
  projectPods: {
    title: "Project Pods",
    icon:  hir3,
    featuresList: [
      "Pods: Lead Gen + CRM, QA Testing, Content & Design",
      "Fixed deliverables, clear timelines, team oversight",
      "Fully managed by Streelancer",
      "Plug-and-play execution with minimal input needed",
    ],
  },
  fractionalCXOs: {
    title: "Fractional CXOs",
    icon:  hir4,
    featuresList: [
      "Roles: Sales VP, Tech Advisor, Digital CMO",
      "Senior leaders available part-time (10–15 hrs/week)",
      "Strategic outcomes without full-time cost",
      "Great for scale-ups or high-growth teams",
    ],
  },
  payPerHire: {
    title: "Pay-per-Hire",
    icon: hir5,
    featuresList: [
      "Roles: BDM, Tech Support (L1), Digital Marketer",
      "One-time hiring fee (6–8% of CTC)",
      "DEI-screened candidates + 60–90 day guarantee",
      "Fast, easy hiring with no long-term commitment",
    ],
  },
};



const HiringCard = () => {
  return (
    <div className='main-hiringcard'>
        <h1>Flexible Hiring Models</h1>
        <p>Choose the engagement model that best fits your business needs</p>
        <div className='hiring-items'>
           {Object.values(hiringModelsData).map((card, index) => (
  <RemoteCard
    key={index}
    title={card.title}
    icon={card.icon}
    featuresList={card.featuresList}
  />
))}
        </div>
    </div>
  );
};

export default HiringCard;

