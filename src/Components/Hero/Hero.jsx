import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg';
import { motion } from "framer-motion";

import { Typewriter } from 'react-simple-typewriter';
import { FaShieldAlt } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="hero">
      <div className="btn"><h4>Starting Package : <span>5 Lacs - 6 Lacs</span> </h4></div>
      <h2 className='hero-text'>4 Months Online & Offline Digital Marketing Course To Make You A High-Paying <span>
            <Typewriter
            words={['Digital Marketer', 'Business Coach', 'Video Edittor', 'Graphic Designer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1500}
        />
      </span></h2>

      <div className="placement-box">
        <FaShieldAlt className="shield-icon"/>
        <p>
          कोर्स पूरा होने के बाद <span>15 दिनों</span> के अंदर कंपनी द्वारा 
          <span> प्लेसमेंट</span> – वरना <span>100% फीस वापसी!</span>
        </p>
      </div>
      <img src={hero} />
       
    </div>
  )
}

export default Hero