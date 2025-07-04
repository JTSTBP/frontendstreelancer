

import React, { useEffect, useState } from "react";
import "./Deitalent.css";
import { useLocation } from "react-router-dom";
import Deitalentbanner from "./cards/card1";
import Deifeatures from "./cards/card2";
import WhyChooseUs from "./cards/card3";


const Deitalent = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
     <Deitalentbanner/>
     <Deifeatures/>
     <WhyChooseUs/>
     
    </div>
  );
};

export default Deitalent;
