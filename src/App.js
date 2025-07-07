import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/Home/HomePage";

import LoginPage from "./pages/Auth/LoginPage";

import Signup from "./pages/Auth/Signup";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import GlobalFlex from "./pages/Globalflex/globalflex";
import Deimain from "./pages/Dei/Deimain";
import Deitalent from "./pages/Deitalent/Deitalent";





export default function App() {

 
  return (
    <>
  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage/>} />
          <Route path="/Registration" element={<RegistrationPage/>} />
          <Route path="/GlobalFlex" element={<GlobalFlex/>} />
           <Route path="/DEITalent" element={<Deimain/>} />
             <Route path="/DEITalenthire" element={<Deitalent/>} />
      </Routes>
    </Router>
       <ToastContainer position="top-right" autoClose={3000} /></>
  );
}
