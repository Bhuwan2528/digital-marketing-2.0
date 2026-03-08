import React, { useEffect, useRef, useState } from "react";
import './Course.css'
import graphic from '../../assets/graphic.png'
import digital from '../../assets/digital.webp'
import video from '../../assets/video.jpeg'
import brochure from '../../assets/webmok-brochure.pdf'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";

const Course = ({openPopup}) => {

const containerRef = useRef(null)

const [showPopup,setShowPopup] = useState(false)
const [name,setName] = useState("")
const [mobile,setMobile] = useState("")
const [city,setCity] = useState("")

useEffect(() => {
AOS.init({
duration: 1000,
once: false,
});
AOS.refresh();
}, []);

const openDownloadPopup = () =>{
setShowPopup(true)
}

const handleDownload = () =>{

if(name === "" || mobile === "" || city === ""){
alert("Please fill all details first")
return
}

const message =
`New Brochure Enquiry:
Name: ${name}
Mobile: ${mobile}
City: ${city}`

const whatsappURL =
`https://wa.me/919650539195?text=${encodeURIComponent(message)}`

window.open(whatsappURL,"_blank")

const link = document.createElement("a")
link.href = brochure
link.download = "webmok-brochure.pdf"
document.body.appendChild(link)
link.click()
document.body.removeChild(link)

setShowPopup(false)

}

  return (
    <div className="courses">

      <h2 data-aos="fade-up" 
        data-aos-delay="300" 
        data-aos-anchor-placement="top-bottom"
      >Our Courses</h2>

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

            <div className="button-container">
              <button className="btn course-btn" onClick={openPopup}> 
                Apply Now 
              </button>

              <button className="btn course-btn" onClick={openDownloadPopup}>
                Download Brochure
              </button>
            </div>

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

            <div className="button-container">
              <button className="btn course-btn" onClick={openPopup}> 
                Apply Now  
              </button>

              <button className="btn course-btn" onClick={openDownloadPopup}>
                Download Brochure  
              </button>
            </div>

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

            <div className="button-container">
              <button className="btn course-btn" onClick={openPopup}> 
                Apply Now  
              </button>

              <button className="btn course-btn" onClick={openDownloadPopup}>
                Download Brochure  
              </button>
            </div>
            
        </div>

    </div>


{/* POPUP */}

{showPopup && (

<div className="brochure-popup">

<div className="popup-box">

<h3>Download Brochure</h3>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="tel"
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
/>

<input
type="text"
placeholder="City"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<button className="btn course-btn" onClick={handleDownload}>
Download Brochure
</button>

</div>

</div>

)}

</div>
  )
}

export default Course