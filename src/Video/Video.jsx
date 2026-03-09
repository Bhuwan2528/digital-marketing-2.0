import React, { useState } from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const video1 = "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039811/video1_hktex6.mp4";
const video2 = "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039813/video2_um2bq5.mp4";
const video3 = "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039812/video3_eqf8nf.mp4";
const video4 = "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039858/video4_ddh3jo.mp4";

const Video = () => {

const [popupVideo,setPopupVideo] = useState(null)

const openVideo = (video)=>{
setPopupVideo(video)
}

const closeVideo = ()=>{
setPopupVideo(null)
}

  return (
    <div className='videoes'>

        <h2>Explore Our Learner’s Journey</h2>

        <p>
        Join a prestigious group of SkillCircle alumni that includes strategists
        from the world's biggest brands and agencies, creative business owners,
        and powerful digital marketing leaders.
        </p>

        <div className="videoes-container">

{/* VIDEO 1 */}
<div className="video" onClick={()=>openVideo(video1)}>
    <video src={video1} preload="metadata" muted playsInline />
    <FaPlay className="play-icon"/>
</div>

{/* VIDEO 2 */}
<div className="video" onClick={()=>openVideo(video2)}>
    <video src={video2} preload="metadata" muted playsInline />
    <FaPlay className="play-icon"/>
</div>

{/* VIDEO 3 */}
<div className="video" onClick={()=>openVideo(video3)}>
    <video src={video3} preload="metadata" muted playsInline />
    <FaPlay className="play-icon"/>
</div>

{/* VIDEO 4 */}
<div className="video" onClick={()=>openVideo(video4)}>
    <video src={video4} preload="metadata" muted playsInline />
    <FaPlay className="play-icon"/>
</div>

        </div>

{/* VIDEO POPUP */}

{popupVideo && (

<div className="video-popup">

<div className="video-popup-box">

<IoClose className="close-video" onClick={closeVideo}/>

<video
src={popupVideo}
controls
autoPlay
/>

</div>

</div>

)}

    </div>
  )
}

export default Video