


import { HiOutlineUserAdd, HiOutlineBookOpen, HiOutlineBriefcase } from 'react-icons/hi';
import { LuRoute } from 'react-icons/lu'; // Clean outlined route icon

import ic1 from "../../../images/ic1.png"
import ic2 from "../../../images/ic2.png"
import ic3 from "../../../images/ic3.png"
import ic4 from "../../../images/ic4.png"
import num1 from "../../../images/num1.png"
import num2 from "../../../images/num2.png"
import num3 from "../../../images/num3.png"
import num4 from "../../../images/num4.png"
import { useNavigate } from 'react-router-dom';


const stepIcons = [ic1,ic2,ic3,ic4

];

const numsicon = [num1,num2,num3,num4

];

const StreelancerSteps = () => {
     const navigate = useNavigate();
  return (
    <div className="main-container">
      <h2 className="title">Find Your Fit, Your Way</h2>
      <p className="subtitle">
        Explore curated freelance and job-ready roles by category—designed for every stage, story, and strength.
      </p>

      {/* Top Steps */}
      <div className="steps-grid">
        {[
          { num: "1", title: "Create Your Profile", desc: "Complete your profile and take our career assessment quiz" },
          { num: "2", title: "Smart Routing", desc: "Get personalized recommendations based on your skills and goals" },
          { num: "3", title: "Learn & Build Profile", desc: "Enhance your skills and create a standout professional profile" },
          { num: "4", title: "Get Hired", desc: "Connect with employers and secure remote opportunities that match your profile" }
        ].map((step, idx) => (
          <div className="step-card" key={idx}>
            <div className='step-zero'></div>
            <div className="step-number">
              <img src={numsicon[idx]}/>
              </div>
            <h3 className="step-title">{step.title}</h3>
           
            
            <div >
                <img className="ic1" src={stepIcons[idx]}/>
             
            <p className="step-desc" style={{textAlign:"center"}}>{step.desc}</p>
            </div>
             
          </div>
        ))}
      </div>

      {/* home-divider */}
      <div className="home-divider">
        <h2>Find The Right Person For The Job</h2>
        <p>Pre-vetted, DEI-aligned remote talent</p>
      </div>

 


      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="employer-box">
          <h3>Why Employers Choose Streelancer ?</h3>
          <div className="employer-point">
            <strong>Diverse Talent Pool</strong>
            <p>Access CXOs, Virtual Assistants, SDRs, Designers, and more from backgrounds.</p>
          </div>
          <div className="employer-point">
            <strong>Verified Profiles with DEI Tags</strong>
            <p>All candidates are pre-vetted with verified skills and clear diversity indicators to support your inclusion goals.</p>
          </div>
          <div className="employer-point">
            <strong>DEI Hiring Dashboard</strong>
            <p>Track and report on your diversity hiring metrics with our comprehensive analytics dashboard.</p>
          </div>
        </div>

        <div className="hire-box" 
  >
          <h3>Be a part of Streelancer.</h3>
          <ul>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img src={require("../../../images/message.png")} alt="icon" style={{ width: "30px", height: "30px" }} />
  <span><b>24x7</b> <br/>Support</span>
</li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img src={require("../../../images/verified.png")} alt="icon" style={{ width: "30px", height: "30px" }} />
  <span><b>Verified</b> <br/>Talent</span>
</li>
          
          </ul>
          <button className="hire-btn" onClick={()=>{ navigate("/DEITalenthire")}}>Hire Now</button>

          <img
    src={require("../../../images/people.png")}
    alt="Decorative Bottom Image"
  className='people-img'
  />
        </div>
      </div>
    </div>
  );
};

export default StreelancerSteps;
