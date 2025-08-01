

import React, { useEffect, useState,useRef } from "react";
import "./dei.css";
import { useLocation } from "react-router-dom";

import Deibanner from "./cards/deibanner";
import Deifeatures from "./cards/deifeatures";
import Deisurvey from "./cards/deisurvey";
import Deibenifits from "./cards/DeiBenifits/deibenifits";
import Deitrust from "./cards/deitrust";
import DEICertification from "./cards/deicerti";
import DEIBadges from "./cards/deibadge";
import StartDEIJourney from "./cards/deiend";
import Mainpopup from "./popup/mainpopup";
import SampleNavbar from "../Home/OtherpagesNavbar";
import CongratulationsPopup from "./popup/congratulationspopup";



const Deimain = () => {
  const { pathname } = useLocation();
  const [showSurvey, setShowSurvey] = useState(false);
    const [showSurveycongrats, setShowSurveycongrats] = useState(false);
    const featuresRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

   const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
         <SampleNavbar/>
      <Deibanner />
      <Deifeatures ref={featuresRef} onTakeSurveyClick={() => setShowSurvey(true)} />
      <Deisurvey />
      <Deibenifits />
      <Deitrust />
      <DEICertification />
      <DEIBadges />
      <StartDEIJourney scrollToFeatures={scrollToFeatures} onTakeSurveyClick={() => setShowSurveycongrats(true)} />

      {showSurvey && <Mainpopup onClose={() => setShowSurvey(false)} />}
        {showSurveycongrats && <CongratulationsPopup onClose={()=> setShowSurveycongrats(false)}/>}
    </div>
  );
};

export default Deimain;
