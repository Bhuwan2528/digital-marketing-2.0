import React, { useEffect, useRef } from "react";
import './Course.css'
import { FaArrowRightLong } from "react-icons/fa6";
import graphic from '../../assets/graphic.png'
import digital from '../../assets/digital.jpeg'
import web from '../../assets/web.jpeg'
import video from '../../assets/video.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";



const Course = ({openPopup}) => {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
  AOS.refresh();
}, []);


   const containerRef = useRef(null);

  const scrollAmount = () => {
    return containerRef.current.offsetWidth * 1;
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container.scrollLeft <= 0) {
      // 🔁 Loop to end
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth"
      });
    } else {
      container.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
      // 🔁 Loop to start
      // container.scrollTo({
      //   left: 0,
      //   behavior: "smooth"
      // });
    } else {
      container.scrollBy({
        left: scrollAmount(),
        behavior: "smooth"
      });
    }
  };

  // ⏱ Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, []);



  return (
    <div className="courses">

      <h2 data-aos="fade-up" 
        data-aos-delay="300" 
        data-aos-anchor-placement="top-bottom"
      >Our Courses</h2>

      <button className="arrow-btn left" onClick={scrollLeft}>
        ◀
      </button>

    <div className='course-container'  ref={containerRef}>
        
        <div className="course">
          <span><p>01</p></span>
            <img src={digital} />
            <h3>Advanced Digital Marketing Course</h3>
            <ul>
              <li> <FaArrowRight />  Social Media Marketing</li>
              <li> <FaArrowRight />  Pay Per Click</li>
              <li> <FaArrowRight />  Analytical Tools</li>
              <li> <FaArrowRight />  Search Engine OPtimization</li>
              <li> <FaArrowRight />  Content Marketing</li>
            </ul>
            <button className="btn course-btn" onClick={openPopup}> 
              Apply Now <FaArrowRightLong className='btn-icon'/>
            </button>
        </div>

        <div className="course">
          <span><p>02</p></span>
            <img src={graphic} />
            <h3>Business & Personality development</h3>
            <ul>
              <li><FaArrowRight />Communication Skills</li>
              <li><FaArrowRight />Leadership Qualities</li>
              <li><FaArrowRight />Time Management</li>
              <li><FaArrowRight />Problem-Solving Skills</li>
              <li><FaArrowRight />Confidence Building</li>
            </ul>
            <button className="btn course-btn" onClick={openPopup}> 
              Apply Now <FaArrowRightLong className='btn-icon'/>
            </button>
        </div>

        <div className="course">
          <span><p>03</p></span>
            <img src={video} />
            <h3>Videoes and Graphic Designing</h3>
            <ul>
              <li><FaArrowRight />Canva</li>
              <li><FaArrowRight />Adobe Photoshop</li>
              <li><FaArrowRight />Adobe Illustrator</li>
              <li><FaArrowRight />Adobe Premiere Pro</li>
              <li><FaArrowRight />CapCut</li>
            </ul>
            <button className="btn course-btn" onClick={openPopup}> 
              Apply Now <FaArrowRightLong className='btn-icon'/>
            </button>
        </div>

        {/* <div className="course">
          <span><p>04</p></span>
            <img src={web} />
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas</p>
            <button className="btn course-btn"> 
              Read More <FaArrowRightLong className='btn-icon'/>
            </button>
        </div> */}

    </div>

      <button className="arrow-btn right" onClick={scrollRight}>
        ▶
      </button>

    </div>
  )
}

export default Course
