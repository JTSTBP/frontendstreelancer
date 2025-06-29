

import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import slide1 from "../../images/signup1.png";
import slide2 from "../../images/signup2.png";
import slide3 from "../../images/signup3.png";
import "./auth.css";

const images = [slide1, slide2, slide3];

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    jobStatus: "",
    email: "",
    password: "",
  });
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();
    const Backendurl=process.env.REACT_APP_BACKEND_URL
console.log(Backendurl,"Backendurl")
  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const isValid = () => {
    return (
      formData.fullName &&
      formData.gender &&
      formData.jobStatus &&
      formData.email &&
      formData.password
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
setMessage("");           // Clear previous message
setMessageType("");
    if (!isValid()) {
      setMessage("Please fill in all fields.");
      setMessageType("Warning")
      return;
    }

    try {
      const response = await fetch(`${Backendurl}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

     const data = await response.json();

    if (response.ok) {
      setMessageType("Success");
      setMessage(data.message || "Signup successful! Redirecting...");
      setTimeout(() => navigate("/Registration"), 2500);
    } else {
      setMessageType("error");
      setMessage(data.message || "Signup failed.");
    }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error")
    }
  };
  console.log(messageType,"messagetype");
  

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <h1>“Join Streelancer to start your journey”</h1>

        <div className="signup-card">
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <div className="input-row">
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <input
                type="text"
                name="jobStatus"
                placeholder="Current Job Status"
                value={formData.jobStatus}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="signup-button">Sign up</button>
          </form>

          {message && <p style={{ color: messageType === "Success" ? "limegreen" : "#ff4d4f", marginTop: "10px" }}>{message}</p>}

          <div className="divider">or</div>

          <div className="auth-social-icons">
            <FaGoogle />
            <FaFacebook />
            <FaLinkedin />
          </div>

          <p className="signin-text">
            Already have an account?{" "}
            <a onClick={() => navigate("/login")}>Sign in</a>
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="image-carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === current ? "active" : ""}`}
          />
        ))}

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;
