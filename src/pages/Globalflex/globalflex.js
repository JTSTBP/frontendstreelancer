import React, { useEffect } from "react";
import "./globalflex.css";

import GlobalFlexNetwork from "./cards/globalflexbanner";
import GlobalFlexFeatures from "./cards/globalflexfeatures";
import IndustrySolutions from "./cards/industrysolutions";
import HowItWorks from "./cards/howitworks";
import ContactForm from "./cards/contactus";
import { useLocation } from "react-router-dom";
import Navbar from "../Home/navbar";
import SampleNavbar from "../Home/OtherpagesNavbar";



const GlobalFlex = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
  
  return (
    <div>
      <SampleNavbar/>
   <GlobalFlexNetwork/>
   <GlobalFlexFeatures/>
   <IndustrySolutions/>
   <HowItWorks/>
   <ContactForm/>
   </div>
  );
};

export default GlobalFlex;
