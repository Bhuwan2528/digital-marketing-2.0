import React, { useEffect } from "react";
import './Course.css'
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import graphic from '../../assets/graphic.png'
import digital from '../../assets/digital.jpeg'
import video from '../../assets/video.jpeg'
import img from '../../assets/courses-img.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const coursesData = [
  ["Digital Marketing Overview", "Website Planning & Designing", "Search Engine Optimization", "Search Engine Marketing", "Social Media Optimization", "Affiliate Marketing", "Online Reputation Management", "Geo Targeting", "E-commerce Marketing", "Content Marketing"],
  ["Web Analytics", "Video Marketing", "Email Marketing", "Fundamental of Google Adsense", "WordPress / Blogging", "Mobile Marketing", "Making Money as Freelancer", "Experts Change Minds", "Cyber Laws", "Video Editing"],
  ["Graphic Designing", "Business Strategy", "Funnel Creation", "Doubt Session", "Interview Preparation", "Client Handling", "Proposal Design", "Public Speaking", "Web Master", "AI Tools"]
];

const Course = ({ openPopup }) => {
  useEffect(() => {
    AOS.init({
      duration: 600, // slightly smoother
      once: true,    // ensures animation plays only once
      offset: 80,    // starts a bit earlier for better effect
    });

  }, []);

  return (
    <div className="courses">
      <h2 data-aos="fade-right" data-aos-delay="100">Grow Your Career and Business</h2>
      <p data-aos="fade-left" data-aos-delay="100">Attract More Customers and Build a Successful Future.</p>

      <div className="courses-img">
        <img src={img} alt="Courses" />
      </div>

      <div className="courses-list">
        {coursesData.map((courseGroup, idx) => (
          <div className="course-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <ul>
              {courseGroup.map((item, index) => (
                <li key={index}>
                  <FaArrowRight className="icon" /> {item}
                </li>
              ))}
            </ul>
            <button className=" course-btn" onClick={openPopup}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Course;
