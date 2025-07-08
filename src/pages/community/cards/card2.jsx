import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Get in Touch With Us</h2>
      <p className="faq-subtitle">
        We'd love to hear from you! Whether you're a job-seeker, hiring partner, or just curious — drop us a message and we'll get back to you soon.
      </p>

      <form className="communitycontact-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone no.</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
