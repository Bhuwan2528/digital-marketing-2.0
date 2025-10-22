import React from "react";
import "./Testimonials.css";
import user1 from "../../assets/user-default.png";
import user2 from "../../assets/user-default.png";
import user3 from "../../assets/user-default.png";
import user4 from "../../assets/user-default.png";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>
        Look at how our students have used these AI Tools to grow in their{" "}
        <span>leads & sales...</span>
      </h2>
      <p className="subtitle">
        Learn how to fix your leads & sales — fast, with AI.
      </p>

      <div className="testimonials-grid">

        {/* 1️⃣ Risheeta Singh */}
        <div className="testimonial-card">
          <div className="profile">
            <img src={user1} alt="Risheeta Singh" className="profile-img" />
            <div>
              <h4>Risheeta Singh</h4>
              <p>1 review</p>
              <p>IN</p>
            </div>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <h3>Generated more leads than in the past 3 months combined</h3>
          <p className="content">
            <mark>In just one week after the workshop, I generated more leads than in the past 3 months combined.</mark>{" "}
            The AI tools for website building, ad copy, and automation have completely changed the way I work.
            And now I finally have time to focus on strategy and business growth instead of daily execution.{" "}
            <mark>Highly recommended for Business owners!!</mark>
          </p>
        </div>

        {/* 2️⃣ Rehan Poonawala */}
        <div className="testimonial-card">
          <div className="profile">
            <img src={user2} alt="Rehan Poonawala" className="profile-img" />
            <div>
              <h4>Rehan Poonawala</h4>
              <p>3 reviews</p>
              <p>IN</p>
            </div>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <h3>My monthly sales have grown up by 80%</h3>
          <p className="content">
            I used to spend hours coordinating with freelancers for my ads, websites, and videos.{" "}
            <mark>Now, thanks to the workshop, I can do it all myself in a fraction of the time.</mark>{" "}
            My monthly sales have grown by 80%, and my stress levels have gone down even more!
          </p>
        </div>

        {/* 3️⃣ Vikas Sharma */}
        <div className="testimonial-card">
          <div className="profile">
            <img src={user3} alt="Vikas Sharma" className="profile-img" />
            <div>
              <h4>Vikas Sharma</h4>
              <p>1 review</p>
              <p>IN</p>
            </div>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <h3>I ended up getting a promotion.</h3>
          <p className="content">
            I took what I learned in the AI Digital Marketing Workshop by Navin Sir back to my job and{" "}
            <mark>started applying it right away.</mark> Within weeks, our campaigns were performing way better, and
            lead quality improved drastically. My Sir was so impressed,{" "}
            <mark>I ended up getting a promotion.</mark> I am the happiest person in the world right now — all thanks to
            Navin Sir and the skills I picked up here. <mark>Best workshop of my life.</mark>
          </p>
        </div>

        {/* 4️⃣ Ankita Seth */}
        <div className="testimonial-card">
          <div className="profile">
            <img src={user4} alt="Ankita Seth" className="profile-img" />
            <div>
              <h4>Ankita Seth</h4>
              <p>3 reviews</p>
              <p>IN</p>
            </div>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <h3>Lead flow has already doubled in just 3 weeks!</h3>
          <p className="content">
            Before this workshop, building a website felt like a month-long project.{" "}
            <mark>Using the AI tools I learned here, I launched a complete, professional site in just 5 mins.</mark>{" "}
            The time I’ve saved now goes straight into scaling my business —{" "}
            <mark>my lead flow has already doubled in just 3 weeks!</mark>
          </p>
        </div>
      </div>

      <div className="offer-box">
        <p className="offer-title">
          Grow Any Business using AI Digital Marketing for FREE!
        </p>
        <p className="offer-sub">(Offer Valid Only For First 100 People!)</p>
      </div>
    </section>
  );
};

export default Testimonials;
