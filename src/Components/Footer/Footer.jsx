import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className='footer'>
        
        <div className="footer-container">
            <div className="talk">
                <h3>Let's Talk </h3>
                <h2>+91 8950329919</h2>
            </div>

            <div className="branch">
                <h3>Our Branches : </h3>
                <h2>Rohtak</h2>
                <h2>Hissar</h2>
                <h2>Delhi</h2>
                <h2>Gurgaon</h2>
                <h2>Noida</h2>
            </div>
            
            <div className="email-container">
                    <h4>Get the latest inspiration & insights</h4>
                    <div className="email-box">
                        <input type="text" placeholder='Your Email Address'  />
                        <span><FaTelegramPlane /></span>
                    </div>
            </div>
            

            

        </div>

    </div>
    <div className="copyright">
        <p>All Rights Are Reserved | WebMok</p>
    </div>
    </>
  )
}

export default Footer