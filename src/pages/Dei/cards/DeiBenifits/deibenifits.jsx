import React from 'react';
import side from "../../../../images/sideben.png"
import DEIBadge from './card1';
import HiringImpactVisibility from './card2';
import Card2 from './card2';
import Card3 from './crad3';


const Deibenifits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-heading">Benefits for Companies</h2>
      <p className="benefits-subheading">
        Showcase your commitment to diversity, equity, and inclusion with tangible credentials
      </p>
      <div className="benefits-content">
        <div className="benefits-image">
          <img src={side} alt="Documents illustration" />
        </div>
        <div className="benefits-cards">
       
          <DEIBadge/>
<Card2/>
<Card3/>
         
        </div>
      </div>
    </div>
  );
};

export default Deibenifits;
