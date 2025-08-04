import React ,{useRef} from 'react';
import RemoteCard from './carditem1';

import hir1 from "../../../images/hir1.png"
import hir2 from "../../../images/hir2.png"
import hir3 from "../../../images/hir3.png"
import hir4 from "../../../images/hir4.png"
import hir5 from "../../../images/hir4.png"

const hiringModelsData = {
  fullTimeRemote: {
    title: "💻 Full-Time Remote",
    icon: hir1, // Replace with your actual icon path
    featuresList: [
      "Roles: Inside Sales • Web Support • Social Media",
      "100% work-from-home, zero infrastructure cost",
      "Streelancer handles hiring, onboarding, and coordination",
      "Reliable, DEI-aligned women professionals",
    ],
  },
  hybridTalent: {
    title: "🔄 Hybrid Talent",
    icon:  hir2,
    featuresList: [
      "Roles: Sales Support • Tech Onboarding • SEO & Content",
      "Blend of in-office and remote flexibility",
      "Ideal for coordination-heavy or training-focused roles",
      "Combines local presence with remote efficiency",
    ],
  },
  projectPods: {
    title: "🧩 Project Pods",
    icon:  hir3,
    featuresList: [
      "Pods: Lead Gen + CRM • QA Testing • Content & Design",
      "Fixed deliverables with clear timelines, team oversight",
      "Fully managed by Streelancer Project leads",
      "Plug-and-play execution - you just assign and go",
    ],
  },
  fractionalCXOs: {
    title: "🧠 Fractional CXOs",
    icon:  hir4,
    featuresList: [
      "Roles: Sales VP • Tech Advisor • Digital CMO",
      "Senior leadership, part-time (10–15 hrs/week)",
      "Strategic outcomes at fractional cost",
      "Ideal for startups and growth-stage teams",
    ],
  },
  payPerHire: {
    title: "⚡ Pay-per-Hire",
    icon: hir5,
    featuresList: [
      "Roles: BDM • Tech Support (L1) • Digital Marketer",
      "One-time hiring fee (6–8% of CTC)",
      "Access to DEI-screened candidates",
      "Fast, flexible hiring with 60–90 day replacement guarantee",
    ],
  },
};



const HiringCard = () => {


  return (
    <div className='main-hiringcard'>
        <h1>Flexible Hiring Models</h1>
        <p>Choose the engagement model that fits your business needs—with zero compromise on quality or inclusion.</p>
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

