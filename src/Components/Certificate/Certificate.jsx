import React from "react";
import "./Certificate.css";
import certificateImg from "../../assets/graphic.png"; // 👈 replace this path with your actual image

const Certificate = () => {
  return (
    <section className="certificate-section">
      {/* Left Content */}
      <div className="certificate-left">
        <h2>
          <span className="highlight">Certification</span> That Opens Doors
        </h2>

        <div className="points">
          <div className="point">
            <span className="certificate-icon">🎓</span>
            <p>
              Earn an industry-recognized digital marketing certificate on
              workshop completion.
            </p>
          </div>

          <div className="point">
            <span className="certificate-icon">💼</span>
            <p>
              Showcase your new skills to employers, clients, and your
              professional network.
            </p>
          </div>
        </div>

        <div className="certificate-box offer-box">
          <p className="offer-title">
            Grow Any Business using Google My Business for FREE!
          </p>
          <p className="offer-sub">Offer Valid Only For First 100 People!</p>
        </div>

        <p className="register-text">
          Register before <strong>October 23, 2025</strong> to unlock bonuses
          worth <span className="highlight">Rs 17,500</span>
        </p>
      </div>

      {/* Right Image */}
      <div className="certificate-right">
        <img
          src={certificateImg}
          alt="Skill Nation Certificate"
          className="certificate-image"
        />
      </div>
    </section>
  );
};

export default Certificate;
