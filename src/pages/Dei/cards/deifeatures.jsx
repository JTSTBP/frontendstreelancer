

import React ,{forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';
import bigCircle from '../../../images/circledei.png';
import arrowCircle from '../../../images/arrow.png';

const Deifeatures =forwardRef( ({ onTakeSurveyClick },ref)=> {
   const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/Remotetalent#contact');
  };

  return (
    <div ref={ref} className="flex-features-container">
      <div className="left-section">
        <img src={arrowCircle} alt="Big Circle" className="big-circle" />
        <h2>Take the DEI Score Test Today.</h2>
        <p>
          Quickly assess and benchmark your company’s diversity and inclusion practices — across gender, disability, and LGBTQ+ — and earn your DEI Badge.
        </p>

        <div className="image-stack">
          <img src={bigCircle} alt="Big Circle" className="big-circle" />
        </div>
      </div>

      <div className="right-section">
        <div className="dei-container">
          <div className="dei-buttons">
            <button className="take-survey-btn" onClick={onTakeSurveyClick}>
              Take Survey
            </button>
      <button className="book-session-btn" onClick={handleBookSession}>
              Book DEI Session
            </button>
          </div>

          <h2 className="dei-heading">Your DEI Journey</h2>
          <p className="dei-description">
            Our assessment helps you identify where your organization<br />
            stands on the DEI maturity curve and provides a roadmap<br />
            for advancing to the next level
          </p>

          <div className="dei-steps">
            <div className="step">
              <div className="circle"><div>1</div></div>
              <p>Aware</p>
            </div>
            <div className="step">
              <div className="circle"><div>2</div></div>
              <p>Active</p>
            </div>
            <div className="step">
              <div className="circle"><div>3</div></div>
              <p>Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Deifeatures;
