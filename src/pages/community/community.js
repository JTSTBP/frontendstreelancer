import React from 'react';
import FAQSection from './cards/card1';
import "./community.css"
import ContactForm from './cards/card2';
import NewsletterSection from './cards/card3';
import TwoOptionsSection from './cards/card4';
import CommunityNavbar from './cards/navbar';
import CommunitySection from './cards/card5';
import CommunityBlog from './cards/card6';
import PartnersCarousel from './cards/card7';
import TestimonialCarousel from './cards/card8';


function Community() {
  return (
    <div>
 <CommunityNavbar/>
 <CommunitySection/>
 <CommunityBlog/>
 <TestimonialCarousel/>
<PartnersCarousel/>


      <TwoOptionsSection/>
        <NewsletterSection/>
        <ContactForm/>
      <FAQSection />
    </div>
  );
}

export default Community;
