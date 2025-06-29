import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 // Important for JS components like Carousel

import HomePage from "./pages/Home/HomePage";

import LoginPage from "./pages/Auth/LoginPage";

import Signup from "./pages/Auth/Signup";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import GlobalFlex from "./pages/Globalflex/globalflex";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage/>} />
          <Route path="/Registration" element={<RegistrationPage/>} />
          <Route path="/GlobalFlex" element={<GlobalFlex/>} />
      </Routes>
    </Router>
  );
}
