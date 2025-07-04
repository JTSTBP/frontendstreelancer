import React from 'react';

import handshakeImage from '../../../images/handshake.png'; // replace with your image path

const DEICertification = () => {
  return (
    <div className="dei-cert-container">
      <div className="dei-left">
        <h3>Benefits of DEI Certification</h3>
        <ul>
          <li>
            <span className="check">✓</span>
            Showcase your commitment to inclusion across platforms and proposals.
          </li>
          <li>
            <span className="check">✓</span>
            Appeal to job seekers looking for safe, equitable workplaces.
          </li>
          <li>
            <span className="check">✓</span>
            Use your certification to enhance ESG scores and win DEI-sensitive contracts.
          </li>
        </ul>
      </div>
      <div className="dei-right">
        <img src={handshakeImage} alt="Handshaking illustration" />
      </div>
    </div>
  );
};

export default DEICertification;
