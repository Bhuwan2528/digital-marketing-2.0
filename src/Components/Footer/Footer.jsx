import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className='footer'>
        
        <div className="footer-container">
            <div className="talk">
                <h3>Let's Talk </h3>
                <h2>+91 8950329919</h2>
            </div>

            <div className="footer-branches">

            <h2 className="branches-title">Our Branches</h2>

            <div className="branches-grid">

                <div className="branch-col">
                <h3>Rohtak</h3>
                <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon"/>
                    1st Floor, 129 L, near by CR Polytechnic Back Gate Power House, Model Town, Rohtak, Haryana 124001
                </p>
                <p className="branch-info">
                    <FaPhoneAlt className="branch-icon"/>
                    +91 8950329919
                </p>
                </div>

                <div className="branch-col">
                <h3>Hissar</h3>
                <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon"/>
                    DSB -198, Red Square Market, 125001, near by Eminent Mall, Mehta Nagar, Hisar, Haryana 125001
                </p>
                <p className="branch-info">
                    <FaPhoneAlt className="branch-icon"/>
                    +91 7800020055
                </p>
                </div>

                <div className="branch-col">
                <h3>Delhi</h3>
                <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon"/>
                    Office No: 44, Dwarka Mor Phase 1, Mohan Garden, Uttam Nagar, Delhi, 110059
                </p>
                <p className="branch-info">
                    <FaPhoneAlt className="branch-icon"/>
                    +91 8684031003
                </p>
                </div>

                <div className="branch-col">
                <h3>Gurgaon</h3>
                <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon"/>
                    Sector 29, Gurgaon
                </p>
                <p className="branch-info">
                    <FaPhoneAlt className="branch-icon"/>
                    +91 98765 43213
                </p>
                </div>

                <div className="branch-col">
                <h3>Noida</h3>
                <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon"/>
                    Sector 18, Noida
                </p>
                <p className="branch-info">
                    <FaPhoneAlt className="branch-icon"/>
                    +91 98765 43214
                </p>
                </div>

                <div className="branch-col">
                <h3>Dehradun</h3>
                <p className="branch-info">
                    <FaMapMarkerAlt className="branch-icon"/>
                    Office No 46, Balliwala Chowk, Vijay Park Extension, Dehradun, Uttarakhand 248001
                </p>
                <p className="branch-info">
                    <FaPhoneAlt className="branch-icon"/>
                    +91 7206720663
                </p>
                </div>

            </div>

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