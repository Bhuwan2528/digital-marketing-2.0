import React, { useState } from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4";

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
<div className="video" onClick={()=>openVideo(videoUrl)}>
    <video 
        src={videoUrl}
        preload="metadata"
        muted
        playsInline
    />
    <FaPlay className="play-icon"/>
</div>

{/* VIDEO 2 */}
<div className="video" onClick={()=>openVideo(videoUrl)}>
    <video 
        src={videoUrl}
        preload="metadata"
        muted
        playsInline
    />
    <FaPlay className="play-icon"/>
</div>

{/* VIDEO 3 */}
<div className="video" onClick={()=>openVideo(videoUrl)}>
    <video 
        src={videoUrl}
        preload="metadata"
        muted
        playsInline
    />
    <FaPlay className="play-icon"/>
</div>

{/* VIDEO 4 */}
<div className="video" onClick={()=>openVideo(videoUrl)}>
    <video 
        src={videoUrl}
        preload="metadata"
        muted
        playsInline
    />
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