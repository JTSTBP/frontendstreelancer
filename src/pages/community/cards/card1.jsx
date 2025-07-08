import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqs = [
  { question: "Who can join Streelancer?", answer: "Anyone with skills and passion for freelancing can join Streelancer." },
  { question: "Do I need prior work experience to apply?", answer: "No, freshers are welcome as long as they demonstrate potential and skills." },
  { question: "How does the hiring process work?", answer: "Apply for jobs, get shortlisted, attend interviews, and start working remotely." },
  { question: "Are all roles remote?", answer: "Yes, Streelancer focuses on flexible, remote opportunities." },
  { question: "I’m an employer. How do I start hiring?", answer: "Create an employer account and post your job openings to start hiring." }
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
