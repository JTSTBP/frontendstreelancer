import React from 'react';

import topWave from '../../../images/global.png';




const GlobalFlexNetwork = () => {
  return (
    <div className="global-flex-container">
      <div className="wave-section">
        <img src={topWave} alt="Top Wave" className="top-wave" />
        <div className="text-overlay">
          <h1>Global Flex Network<br />Borderless Talent Solutions</h1>
          <p>
            Access a diverse global network of flexible talent across time zones, cultures, and
            specializations. Build your borderless team with our vetted professionals ready for remote
            collaboration.
          </p>
        </div>
      </div>
      
     
    </div>
  );
};

export default GlobalFlexNetwork;
