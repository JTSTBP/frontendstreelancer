import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Mail, Phone, MapPin } from "lucide-react";
import Backendurl from "../../../config"; 

const ContactForm = () => {



  const [formData, setFormData] = useState({
    company: '',
    name: '',
     phone: '',
    email: '',
    regions: [],
    workModel: 'Full time remote',
    country: 'Your country',
    teamSize: 15,
    requirements: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    let updatedRegions = [...formData.regions];
    if (checked) {
      updatedRegions.push(value);
    } else {
      updatedRegions = updatedRegions.filter((region) => region !== value);
    }
    setFormData({ ...formData, regions: updatedRegions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${Backendurl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
    
         toast.success( "Inquiry submitted successfully!");
        // Optionally reset form
        setFormData({
          company: '',
          name: '',
          email: '',
          regions: [],
          workModel: 'Full time remote',
          country: 'Your country',
          teamSize: 15,
          requirements: '',
        });
      } else {
       
         toast.error( "Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting the form.');
    }
  };

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

        <section className="consultation-section">
      <div className="consultation-container">
        <div className="consultation-form-container">
          <h3>Book a Free Consultation</h3>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Company Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Hiring Requirement" rows="4"></textarea>
            <button type="submit">Schedule Consultation</button>
          </form>
        </div>

        <div className="consultation-info-container">
          <h3>Contact Information</h3>
          <div className="consultation-info-box">
            <Mail size={16} />
            <div>
              <p className="consultation-info-title">Email Us</p>
              <p>hire@streelancer.in</p>
            </div>
          </div>
          <div className="consultation-info-box">
            <Phone size={16} />
            <div>
              <p className="consultation-info-title">Call Us</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="consultation-info-box">
            <MapPin size={16} />
            <div>
              <p className="consultation-info-title">Office Location</p>
              <p>Koramangala, Bangalore 560034</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ContactForm;
