import React, { useState } from 'react';


const ContactForm = () => {
  const [teamSize, setTeamSize] = useState(15);

  return (
    <div className="contact-wrapper">
      <div className="global-header">
        <h2>Ready to Build Your Global Team?</h2>
        <p>
          Connect with our team to discuss your global talent needs and discover how our flexible
          workforce solutions can help your business thrive across borders.
        </p>
      </div>

      <div className="global-formbox">
        <h3>Contact Us</h3>
        <form className='global-form'>
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" />

          <div className="global-formrow">
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
          </div>

          <div className="checkbox-section">
            <label>Regions of Interest</label>
            <div className="checkbox-container">
              <div>
                <label><input type="checkbox" /> Technology</label>
                <label><input type="checkbox" /> Healthcare</label>
                <label><input type="checkbox" /> Technology</label>
              </div>
              <div>
                <label><input type="checkbox" /> Finance & Banking</label>
                <label><input type="checkbox" /> Education</label>
                <label><input type="checkbox" /> Finance & Banking</label>
              </div>
            </div>
          </div>

          <div className="global-formrow">
            <div>
              <label htmlFor="workModel">Preferred Work Model</label>
              <select id="workModel">
                <option>Full time remote</option>
                <option>Part time</option>
                <option>On-site</option>
              </select>
            </div>
            <div>
              <label htmlFor="country">Select Country</label>
              <select id="country">
                <option>Your country</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
          </div>

          <label htmlFor="teamSize" className="slider-label">Team Size Needed</label>
          <input
            type="range"
            min="1"
            max="50"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            id="teamSize"
          />

          <div className="slider-numbers">
            <span>1</span>
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>50</span>
          </div>

          <p>{teamSize} Team members</p>

          <label htmlFor="requirements">Additional Requirements</label>
          <textarea id="requirements" rows="4"></textarea>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
