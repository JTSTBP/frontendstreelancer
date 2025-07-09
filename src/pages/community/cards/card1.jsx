import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  { question: "Who can join Streelancer?", answer: "Anyone who identifies as a woman, queer, person with disability, neurodiverse, returnee, or part of the silver generation is welcome!" },
  { question: "Do I need prior work experience to apply?", answer: "Not necessarily. We have opportunities for freshers, returnees, and experienced professionals — plus training to help you get job-ready." },
  { question: "How does the hiring process work?", answer: "Once you register and complete your profile, we’ll match you to job roles or training based on your skills and availability." },
  { question: "Are all roles remote?", answer: "We offer remote, hybrid, project-based, and fractional roles — based on what suits your schedule and goals best." },
  { question: "I’m an employer. How do I start hiring?", answer: "Just visit our \[Hire Talent] page or \[Book a Consultation]. We’ll guide you through your DEI-aligned hiring journey." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Still curious? Here are quick answers to what most people ask us.</p>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            <div>
 <span className="faq-number">{`0${index + 1}`}</span>
            <span>{faq.question}</span>
            </div>
           
            <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>  <MdKeyboardArrowDown /></span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
