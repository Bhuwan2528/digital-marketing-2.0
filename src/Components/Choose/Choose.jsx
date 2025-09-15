import React, { useEffect } from 'react'
import './Choose.css'
import advance from '../../assets/Advanced.png'
import hands from '../../assets/blog.png'
import individual from '../../assets/indvidual.png'
import AOS from "aos";
import "aos/dist/aos.css";


const Choose = () => {

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
    AOS.init({
        offset: isMobile ? 50 : 300,
        duration: 1000,
        once: false, // optional
    });
}, []);


  return (
    <div className='choose'>
        <h4 >Why Choose Us</h4>

        <div 
        className="choose-card" 
        data-aos="fade-up" 
        data-aos-delay="200" 
        data-aos-anchor-placement="top-bottom"
        >
            <div className="card-left">
                <img src={advance} />
            </div>
            <div className="card-right">
                <h3>Advanced Curriculum</h3>
                <p>Our courses are designed with an advanced curriculum that blends theory with real-world applications. Each module is crafted by industry professionals to ensure you learn the latest tools, strategies, and best practices.</p>
                <p>We focus on hands-on training, live projects, and case studies, giving you the skills and confidence to excel in today’s competitive job market.</p>
            </div>
        </div>

        <div 
        className="choose-card" 
        data-aos="fade-up" 
        >
            <div className="card-left">
                <img src={hands} />
            </div>
            <div className="card-right">
                <h3>Hands On Experience</h3>
                <p>Gain practical knowledge through live projects, real-world case studies, and interactive sessions with industry experts.</p>
                <p>We focus on applying concepts in real scenarios, helping you develop problem-solving skills and professional confidence. This approach ensures you’re job-ready, equipped with relevant experience, and prepared to handle workplace challenges with ease.</p>
            </div>
         </div> {/* 8950299210  */}

        <div 
        className="choose-card" 
        data-aos="fade-up" 
        >
            <div className="card-left">
                <img src={individual} />
            </div>
            <div className="card-right">
                <h3>Individual Guidance and Support</h3>
                <p>We provide personalized attention to every student, ensuring that learning needs and career goals are addressed effectively. Our mentors work closely with you, offering constructive feedback and guidance at every step.</p>
                <p>From solving subject-related doubts to giving career advice, we make sure you always have the right support. This one-on-one approach builds confidence, enhances skills, and prepares you to succeed in both academic and professional challenges.</p>
            </div>
        </div>

    </div>
  )
}

export default Choose