import React from 'react'
import './Trainners.css'

const Trainners = () => {
  return (
    <div className='trainners'>
        <h2>Meet Your Digital Marketing Training Captains</h2>
        <p>Teached 100+ Students And Help Them To Grow In There Careers</p>

        <div className="trainner-container">

            <div className="trainner">
                <span className="trainner-img">
                    <img src="" alt="" />
                </span>
                <div className="trainner-content">
                    <h3>Rahish Sangwan</h3>
                    <p>Founder & Digital Marketing Specialist</p>
                </div>
            </div>

            <div className="trainner">
                <span className="trainner-img">
                    <img src="" alt="" />
                </span>
                <div className="trainner-content">
                    <h3>Bhuwan Suneja</h3>
                    <p>AI & Web Development Trainner</p>
                </div>
            </div>

            <div className="trainner">
                <span className="trainner-img">
                    <img src="" alt="" />
                </span>
                <div className="trainner-content">
                    <h3>Simran</h3>
                    <p>Advanced Digital Marketing With AI Trainner</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Trainners