import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg';
import { motion } from "framer-motion";

import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
  return (
    <div className="hero">
      <div className="btn"><h4>Starting Package : <span>5 Lacs - 6 Lacs</span> </h4></div>
      <h2 className='hero-text'>4 Months Online & Offline Digital Marketing Course To Make You A High-Paying <span>
            <Typewriter
            words={['Digital Marketer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1500}
        />
      </span></h2>
      <img src={hero} />
       
    </div>
  )
}

export default Hero