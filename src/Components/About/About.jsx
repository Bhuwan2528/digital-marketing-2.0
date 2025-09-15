import React, { useEffect } from 'react'
import './About.css'
import round from '../../assets/rounded-obj.png'
import { TiStar } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";
import rahish from '../../assets/rahish.jpg'


const About = ({openPopup}) => {

    useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false, // optional
        // offset: 0  
    });
}, []);

  return (
    <>

        <svg width="0" height="0">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff00b7ff" />
            <stop offset="100%" stop-color="#00a2ffff" />
            </linearGradient>
        </defs>
        </svg>


        <div className='about'>
            
            <div className="about-left">

                <span className='about-container'>
                     <span className='icon'><TiStar/></span> About Us
                </span>

                <img src={round} />
            </div>

            <div className="about-right">
                <h2 data-aos="fade-up">
                    Our comprehensive and advanced curriculum helps you to get <span>placed in Big Companies</span>
                </h2>
                <p data-aos="fade-right">Webmok has been a leader in digital marketing services and training for the past 10 years, successfully teaching thousands of students and helping them build rewarding careers in the digital space<br />Over the decade, we have expanded our reach with 5 branches in Rohtak, Noida, Delhi, Hisar, and Gurgaon, providing both professional services and training to individuals and businesses.</p>
                
                <div className="about-content">

                   <button 
                    data-aos="fade-left" 
                    className='btn'
                    > 
                        <span onClick={openPopup}>Read More</span> <FaArrowRightLong className='btn-icon'/>
                    </button>

                    <span 
                    data-aos="fade-left" 
                    className="id"
                    >
                        <span className="id-img"> <img src={rahish} /></span>
                        <div className="id-cont">
                            <h3>Rahish Sangwan</h3>
                            <p>Founder & CEO</p>
                        </div>
                    </span>
                        
                        

                    

                </div>

            </div>

        </div>
    </>
  )
}

export default About