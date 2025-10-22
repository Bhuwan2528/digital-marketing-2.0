import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.jpg"; // replace with your actual hero image

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <h3>
            USE <span>AI TOOLS IN DIGITAL MARKETING FOR FREE</span>
          </h3>
          <h3>
            TO SAVE <span>2 HOURS DAILY</span> AND GROW YOUR{" "}
            <span>LEADS & SALES BY 3X</span>
          </h3>
          <p>(Without any prior AI or marketing knowledge & experience)</p>

          <div className="hero-main">
            <div className="hero-image">
              <img src={heroImg} alt="AI Digital Marketing" />
            </div>

            <div className="hero-details">
              <div className="date-card">
                <div className="date-box">
                  <h4>OCT</h4>
                  <h2>24</h2>
                </div>
                <div className="date-info">
                  <h5>Friday, October 24, 2025</h5>
                  <p>07:00 pm IST</p>
                </div>
              </div>

              <div className="info-grid">
                <div className="hero-info-card">
                  <p>Mode</p>
                  <h4>Online on Zoom</h4>
                </div>
                <div className="hero-info-card">
                  <p>Language</p>
                  <h4>English</h4>
                </div>
              </div>

              <button className="cta-btn">
                Grow Any Business using AI Digital Marketing for{" "}
                <span>FREE!</span>
                <small>(Offer Valid Only For First 100 People!)</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
