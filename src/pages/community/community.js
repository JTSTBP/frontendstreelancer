import React from 'react';
import FAQSection from './cards/card1';
import "./community.css"
import ContactForm from './cards/card2';
import NewsletterSection from './cards/card3';

function Community() {
  return (
    <div>
        <NewsletterSection/>
        <ContactForm/>
      <FAQSection />
    </div>
  );
}

export default Community;
