
import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import Backendurl from "../../config"; 
import { GoogleLogin } from '@react-oauth/google';

import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


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



// google login
const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    try {
      const response = await fetch(`${Backendurl}/api/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: tokenResponse.access_token }),
      });

      const data = await response.json();

      if (response.ok) {
         setMessageType("Success");
        setMessage(data.message || "Google login Success.");
        localStorage.setItem("token", data.token);
        navigate(data.isNewUser ? "/Registration" : "/");
      } else {
        setMessageType("error");
        setMessage(data.message || "Google login failed.");
      }
    } catch (err) {
      setMessageType("error");
      setMessage("Google login error.");
    }
  },
  onError: () => {
    setMessageType("error");
    setMessage("Google login failed.");
  }
});

// facebook login
const facebookLogin = () => {
  window.FB.login(async (response) => {
    if (response.authResponse) {
      const accessToken = response.authResponse.accessToken;

      try {
        const res = await fetch(`${Backendurl}/api/facebook-login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_token: accessToken }),
        });

        const data = await res.json();

        if (res.ok) {
          setMessageType("Success");
          setMessage(data.message || "Facebook login successful");
          localStorage.setItem("token", data.token);
          navigate(data.isNewUser ? "/Registration" : "/");
        } else {
          setMessageType("error");
          setMessage(data.message || "Facebook login failed");
        }
      } catch (err) {
        setMessageType("error");
        setMessage("Facebook login error");
      }
    } else {
      setMessageType("error");
      setMessage("Facebook login cancelled or failed");
    }
  }, { scope: "email" });
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
        <FaGoogle onClick={googleLogin} style={{ cursor: "pointer", fontSize: "24px" }} />

{/* <FaFacebook onClick={facebookLogin} style={{ cursor: "pointer", fontSize: "24px" }} />
<FaLinkedin onClick={linkedinLogin} style={{ cursor: "pointer", fontSize: "24px" }} /> */}

         
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
