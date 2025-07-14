

import { useNavigate } from "react-router-dom";
import returneeImg from "../../../images/ex1.png"; // update path
import silverImg from "../../../images/ex2.png"; 
import ex3 from "../../../images/ex3.png"; // update path
import ex4 from "../../../images/ex4.png";
import ex5 from "../../../images/ex5.png"; 
import line from "../../../images/line.png"
import line2 from "../../../images/line2.png"// update path
// update path

function CareerPathCards() {
    const navigate = useNavigate();
  return (
    <section className="career-section">
      <h2 className="section-title">Your Next Chapter Starts Here

</h2>
      <p className="section-subtitle">
       Opportunities crafted for every stage of your journey — return, reimagine, and rise.
      </p>

      <div className="card-container">
        
        {/* Card 1 */}
        <div className="card returnee-card">
          <img src={returneeImg} alt="Career Returnees" className="card-image" />
          <div className="card-content">
            <h3>Career Returnees</h3>
            <blockquote>"You took a break. Now take the lead."</blockquote>
            <p>
              Restart your career with confidence. Whether it's been 2 years or 10, we match your existing skills with flexible freelance projects so you can ease back into the workforce.
            </p>
           
            <div className="btn-wrapper">
  <button className="register-btn" onClick={() => navigate("/Registration")}>Register Now</button>
  <img src={line} alt="arrow" className="arrow-image left" />
</div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="card silver-card">
          <div className="card-content">
            <h3>Silver Generation</h3>
            <p className="subhead">Experience never expires.</p>
            <p>
              Your experience is your power. We help you explore remote roles that value wisdom, patience, and professionalism—no steep learning curves, just real contributions.
            </p>
                        <div className="btn-wrapper" >
  <button className="register-btn" onClick={() => navigate("/Registration")}>Register Now</button>
  <img src={line2} alt="arrow" className="arrow-image right" />
</div>
          </div>
          <img src={silverImg} alt="Silver Generation" className="card-image" />
        </div>

        {/* card 3 */}
         <div className="card blue-card">
            <img src={ex3} alt="Silver Generation" className="card-image" />
          <div className="card-content">
            <h3>LGBTQIA+ Talent</h3>
            <p className="subhead">Be you. Be hired.</p>
            <p>
              Find projects in inclusive, safe spaces. We partner with diversity-first employers and offer creative, technical, and client-facing roles with full respect for identity.
            </p>
                          <div className="btn-wrapper">
  <button className="register-btn" onClick={() => navigate("/Registration")}>Register Now</button>
  <img src={line} alt="arrow" className="arrow-image left" />
</div>
          </div>
          
        </div>
       
       {/* card 4 */}
        <div className="card yellow-card">
          <div className="card-content">
            <h3>Fresh Freelancers and Students</h3>
            <p className="subhead">Smart smart. Earn earn.</p>
            <p>
              Kickstart your journey in the gig economy. Gain experience, earn on the side, and build your professional portfolio through beginner-friendly freelance roles.
            </p>
                        <div className="btn-wrapper" >
  <button className="register-btn" onClick={() => navigate("/Registration")}>Register Now</button>
  <img src={line2} alt="arrow" className="arrow-image right" />
</div>
          </div>
          <img src={ex4} alt="Silver Generation" className="card-image" />
        </div>
     

       {/* card 5 */}
        <div className="card green-card">
            <img src={ex5} alt="Silver Generation" className="card-image" />
          <div className="card-content">
            <h3>Persons with Disabilities (PWD)</h3>
            <p className="subhead">Skills matter, not limitations.
</p>
            <p>
             
Access remote jobs that focus on what you can do, not what you can't. Work comfortably from home with supportive clients who understand accessibility needs.

            </p>
                           <div className="btn-wrapper">
  <button className="register-btn" onClick={() => navigate("/Registration")}>Register Now</button>
  <img src={line} alt="arrow" className="arrow-image left" />
</div>
          </div>
          
        </div>




        
      </div>
    </section>
  );
}

export default CareerPathCards;
