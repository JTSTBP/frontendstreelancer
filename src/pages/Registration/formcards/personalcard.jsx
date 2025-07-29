


import "./formcard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Personalcard = ({ formData, setFormData }) => {
  const deiOptions = [
    { key: "woman", label: "Woman" },
    { key: "bipoc", label: "BIPOC" },
    { key: "disability", label: "Person with disability" },
    { key: "caregiver", label: "Caregiver" },
    { key: "veteran", label: "Veteran" },
    { key: "lgbtq", label: "LGBTQ+" }
  ];

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(formData.personal.country || "");
  const [selectedState, setSelectedState] = useState(formData.personal.state || "");
  const [selectedCity, setSelectedCity] = useState(formData.personal.city || "");

  // Fetch all countries
  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => setCountries(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    if (selectedCountry) {
      axios.post("https://countriesnow.space/api/v0.1/countries/states", {
        country: selectedCountry
      })
      .then((res) => setStates(res.data.data.states))
      .catch((err) => console.error(err));
    } else {
      setStates([]);
    }
    setSelectedState("");
    setCities([]);
    setSelectedCity("");
  }, [selectedCountry]);

  // Fetch cities when state changes
  useEffect(() => {
    if (selectedState) {
      axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        country: selectedCountry,
        state: selectedState
      })
      .then((res) => setCities(res.data.data))
      .catch((err) => console.error(err));
    } else {
      setCities([]);
    }
    setSelectedCity("");
  }, [selectedState]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    // DEI checkboxes
    if (type === "checkbox" && name.startsWith("dei_")) {
      const identity = name.replace("dei_", "");
      setFormData((prev) => {
        const currentList = prev.personal.deiIdentities || [];
        return {
          ...prev,
          personal: {
            ...prev.personal,
            deiIdentities: checked
              ? [...currentList, identity]
              : currentList.filter((item) => item !== identity)
          }
        };
      });
    } 
    // Regular checkboxes like careerBreak
    else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          [name]: checked
        }
      }));
    } 
    // Regular text/select fields
    else {
      setFormData((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          [name]: value
        }
      }));
    }
  };

  // Handle country-state-city changes separately for formData
  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, country: value, state: "", city: "" }
    }));
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setSelectedState(value);
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, state: value, city: "" }
    }));
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, city: value }
    }));
  };

  return (
    <div className="registration-form-container">
      <h2>Personal & Identity Details</h2>
      <form className="registration-form">
        <div className="form-row">
          <input type="text"
            name="firstName"
            placeholder="First name"
            value={formData.personal.firstName || ""}
            onChange={handleChange} required />
          <input type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.personal.lastName || ""}
            onChange={handleChange} />
        </div>

        <div className="form-row">
          <input type="email"
            name="email"
            placeholder="Email Address"
            value={formData.personal.email || ""}
            onChange={handleChange} required />
          <input type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.personal.phone || ""}
            onChange={handleChange} required />
        </div>

        <div className="form-row">
          <select name="gender"
            value={formData.personal.gender || ""}
            onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <label className="switch">
            <input type="checkbox"
              name="careerBreak"
              checked={formData.personal.careerBreak || false}
              onChange={handleChange} />
            <span className="slider"></span>
          </label>
          <span>I’ve taken a career break of 6+ months</span>
        </div>

        {/* Country-State-City Dropdowns Side by Side */}
        <div className="form-row" style={{ display: "flex", gap: "10px" }}>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map((c, idx) => (
              <option key={idx} value={c.country}>{c.country}</option>
            ))}
          </select>

          <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
            <option value="">Select State</option>
            {states.map((s, idx) => (
              <option key={idx} value={s.name}>{s.name}</option>
            ))}
          </select>

          <select value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="form-row dei-info">
          <label>DEI Identity (optional)</label>
          <small>Select all that apply. This information helps us connect you with inclusive opportunities.</small>
        </div>

        <div className="form-row checkbox-grid">
          {deiOptions.map((option) => (
            <label key={option.key}>
              <input
                type="checkbox"
                name={`dei_${option.key}`}
                checked={formData.personal.deiIdentities?.includes(option.key) || false}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Personalcard;
