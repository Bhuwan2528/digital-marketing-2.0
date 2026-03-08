import React from "react";
import "./Trainners.css";

import bhuwan from "../assets/bhuwan.jpeg";
import rahish from "../assets/rahish.jpeg";
import simran from "../assets/simran.jpeg";

const Trainners = () => {
  return (
    <div className="trainners">

      <h2>Meet Your Digital Marketing Training Captains</h2>
      <p>Teached 100+ Students And Help Them To Grow In There Careers</p>

      {/* Top Trainers */}

      <div className="top-trainers">

        {/* Founder */}

        <div className="top-card founder">

          <div className="top-img">
            <span className="badge">Founder & CEO</span>
            <img src={rahish} alt="" />
          </div>

          <div className="top-content">
            <h3>Rahish Sangwan</h3>
            <p>Founder & Digital Marketing Specialist</p>
          </div>

        </div>


        {/* Second Trainer */}

        <div className="top-card">

          <div className="top-img">
            <img src={simran} alt="" />
          </div>

          <div className="top-content">
            <h3>Simran</h3>
            <p>Advanced Digital Marketing With AI Trainer</p>
          </div>

        </div>

      </div>


      {/* Team Grid */}

      <div className="trainer-grid">

        <div className="trainer-card">
          <img src={bhuwan} alt="" />
          <h4>Bhuwan Suneja</h4>
          <p>AI & Web Development Trainer</p>
        </div>

        <div className="trainer-card">
          <img src={bhuwan} alt="" />
          <h4>Trainer Name</h4>
          <p>Role or Specialization</p>
        </div>

        <div className="trainer-card">
          <img src={simran} alt="" />
          <h4>Trainer Name</h4>
          <p>Role or Specialization</p>
        </div>

        <div className="trainer-card">
          <img src={bhuwan} alt="" />
          <h4>Trainer Name</h4>
          <p>Role or Specialization</p>
        </div>

        <div className="trainer-card">
          <img src={simran} alt="" />
          <h4>Trainer Name</h4>
          <p>Role or Specialization</p>
        </div>

        <div className="trainer-card">
          <img src={bhuwan} alt="" />
          <h4>Trainer Name</h4>
          <p>Role or Specialization</p>
        </div>

      </div>

    </div>
  );
};

export default Trainners;