import React, { useState } from 'react';


const InfoFirst = ({data,setData}) => {
  // const [info1Data, setInfo1Data] = useState({
  //   companyName: '',
  //   industry: '',
  //   companySize: '',
  //   fullName: '',
  //   email: '',
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setData((prev) => ({
      ...prev,
      info1: {
        ...prev.info1,
        [name]: value
      }
    }));
  };

  return (
    <div className="info-form-container">
      <p>Please provide your organization details to begin the assessment.</p>
      
      <label>Company Name</label>
      <input
        type="text"
        name="companyName"
        placeholder="Enter your company name"
        value={data.info1.companyName}
        onChange={handleChange}
      />

      <label>Industry</label>
      <select
        name="industry"
        value={data.info1.industry}
        onChange={handleChange}
      >
        <option value="">Select your Industry</option>
        <option value="IT">IT</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
        {/* Add more options as needed */}
      </select>

      <label>Company Size</label>
      <select
        name="companySize"
        value={data.info1.companySize}
        onChange={handleChange}
      >
        <option value="">Select your company size</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
        <option value="201-1000">201-1000</option>
        <option value="1000+">1000+</option>
      </select>

      <label>Your Name</label>
      <input
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={data.info1.fullName}
        onChange={handleChange}
      />

      <label>Work email</label>
      <input
        type="email"
        name="email"
        placeholder="you@company.com"
        value={data.info1.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default InfoFirst;
