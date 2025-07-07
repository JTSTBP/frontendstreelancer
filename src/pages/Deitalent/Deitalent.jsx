

import React, { useEffect, useState } from "react";
import "./Deitalent.css";
import { useLocation } from "react-router-dom";
import Deitalentbanner from "./cards/card1";
import Deifeatures from "./cards/card2";
import WhyChooseUs from "./cards/card3";
import HowItWorks from "./cards/card5";
import HiringCard from "./cards/card6";
import IndustriesSection from "./cards/card4";
import ContactForm from "./cards/card7";
import SampleNavbar from "../Home/OtherpagesNavbar";


const Deitalent = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
         <SampleNavbar/>
     <Deitalentbanner/>
     <Deifeatures/>
     <WhyChooseUs/>
      <IndustriesSection/>
     <HowItWorks/>
     <HiringCard/>
     <ContactForm/>
    
    </div>
  );
};

export default Deitalent;
