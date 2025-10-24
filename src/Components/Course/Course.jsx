import React, { useEffect } from "react";
import './Course.css'
import { FaArrowRight } from "react-icons/fa6";
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
      duration: 600,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="courses">
      <h2 data-aos="fade-right" data-aos-delay="100">Grow Your Career and Business</h2>
      <p data-aos="fade-left" data-aos-delay="100">Attract More Customers and Build a Successful Future.</p>

      <div className="courses-img">
        <img src={img} alt="Courses" />
      </div>

      <div className="single-course-card" data-aos="fade-up" data-aos-delay="200">
        <div className="course-columns">
          {coursesData.map((courseGroup, idx) => (
            <ul key={idx}>
              {courseGroup.map((item, index) => (
                <li key={index}>
                  <FaArrowRight className="icon" /> {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <button className="course-btn-big" onClick={openPopup}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Course;
