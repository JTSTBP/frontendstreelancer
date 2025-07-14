import { useNavigate } from "react-router-dom";

function CommunityBanner() {
  const navigate = useNavigate();

  return (
    <section className="community-section">

      <div className="community-container">
  <img src={require("../../../images/community.png")} alt="Community" className="community-image" />
  
  <div className="community-text">
    <h2>Join Streelancer Community!</h2>
    <p>
     A safe space to learn, connect, and grow — built for women, queer talent, and second-career professionals.

    </p>
    <button className="join-btn" onClick={()=>{ navigate("/Community")}}>Join Community</button>
  </div>
</div>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <img src={require("../../../images/logo1.png")}/>
          <p>India’s largest women-first platform for inclusive career building.</p>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Platform</h4>
            <ul>
              <li>Academy</li>
              <li>Marketplace</li>
              <li>CXO On Demand</li>
              <li>Community</li>
              <li>DEI Benchmark</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Subscribe</h4>
            <p className="para">Get the latest updates and offers.</p>
            <form>
              <div>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
              </div>
              <p className="privacy-text">
                By subscribing, you agree to our <a href="/">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default CommunityBanner;
