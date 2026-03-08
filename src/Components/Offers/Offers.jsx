import React, { useEffect } from 'react'
import './Offers.css';
import { TiTick } from "react-icons/ti";
import offer from '../../assets/offer.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Offers = () => {

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
    AOS.init({
        offset: isMobile ? 50 : 300,
        duration: 1000,
        once: false, // optional
    });
}, []);

  return (
    <div className='offers'>

        <h2 data-aos="fade-up" 
        data-aos-delay="300" 
        data-aos-anchor-placement="top-bottom"
        >What We Offers</h2>

        <div className="offer-content">

            <div className="offer-left">

                <p data-aos="fade-left" 
                data-aos-delay="300" 
                data-aos-anchor-placement="top-bottom"
                >We provide expert-led training with practical projects, ensuring you gain real industry skills and hands-on experience. </p>

                <div data-aos="fade-right" 
                  data-aos-delay="300" 
                  data-aos-anchor-placement="top-bottom">

                  <h3><span><TiTick /></span>Gauranteed Placements</h3>
                  <p className='p'>Our dedicated placement cell connects you with top companies, ensuring strong career opportunities after course completion.</p>

                  <h3><span><TiTick /></span>Advanced Syllabus</h3>
                  <p className='p'>Learn with a curriculum designed by industry experts, updated regularly to match the latest market trends and technologies.</p>

                  <h3><span><TiTick /></span>Proffesional Enviorment</h3>
                  <p className='p'>Train in a corporate-like setting that prepares you for real workplace challenges and boosts your confidence.</p>
                  
                </div>

            </div>
            <div className="offer-right">
                <img data-aos="fade-left" 
                data-aos-delay="300" 
                data-aos-anchor-placement="top-bottom" 
                src={offer} />
            </div>

        </div>
    </div>
  )
}

export default Offers