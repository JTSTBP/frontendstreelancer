
import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import Backendurl from "../../config"; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' | 'error'

console.log(Backendurl,"Backendurl" , process.env.NODE_ENV)
  // Handle input changes
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic validation
  const isValid = () => formData.email && formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
setMessage("");           // Clear previous message
setMessageType("");
    if (!isValid()) {
      setMessage("Please enter both email and password.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(`${Backendurl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  const data = await response.json();

        if (response.ok) {
           localStorage.setItem("token", data.token); 
      setMessageType("Success");
      setMessage(data.message || "Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2500);
    } else {
      setMessageType("error");
      setMessage(data.message || "Login failed.");
    }
     
    } catch (error) {
      setMessage("Invalid credentials. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome back!</h2>
        <p className="login-subtitle">
          Let’s get you closer to the work-life you deserve.
        </p>

        <div className="login-card">
          <form className="signup-form" onSubmit={handleSubmit}>
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

            <div className="forgot-password">Forgot Password?</div>
            <button type="submit" className="signup-button">Login</button>
          </form>

          {message && (
            <p
              style={{
                color: messageType === "Success" ? "limegreen" : "crimson",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}

          <div className="divider">or</div>

          <div className="auth-social-icons">
            <FaGoogle />
            <FaFacebook />
            <FaLinkedin />
          </div>

          <p className="signin-text">
            Don’t have an account?{" "}
            <a onClick={() => navigate("/signup")}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
