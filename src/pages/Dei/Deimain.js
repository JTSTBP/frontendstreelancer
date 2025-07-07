

import React, { useEffect, useState } from "react";
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



const Deimain = () => {
  const { pathname } = useLocation();
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
         <SampleNavbar/>
      <Deibanner />
      <Deifeatures onTakeSurveyClick={() => setShowSurvey(true)} />
      <Deisurvey />
      <Deibenifits />
      <Deitrust />
      <DEICertification />
      <DEIBadges />
      <StartDEIJourney />

      {showSurvey && <Mainpopup onClose={() => setShowSurvey(false)} />}
    </div>
  );
};

export default Deimain;
