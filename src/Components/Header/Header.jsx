import { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Course from '../../Components/Course/Course'
// import Offers from '../../Components/Offers/Offers'
import Stats from '../../Components/Stats/Stats'
import Join from '../../Components/Join/Join'
import Footer from '../../Components/Footer/Footer'
import Choose from '../../Components/Choose/Choose'
import Placement from '../Placement/Placement';
import Counter from '../Counter/Counter';
import Form from '../Form/Form'
import Bottom from '../Bottom/Bottom';
import { SiWhatsapp } from "react-icons/si";
import { MdCall } from "react-icons/md";
import Trainners from '../../Trainners/Trainners';
import Success from '../../Success/Success';
import Video from '../../Video/Video';
import Free from '../Free/Free';
import Certificate from '../../Components/Certificate/Certificate'
import Testimonials from '../Testimonials/Testimonials';

const Header = ({ openPopup }) => {

    const [sticky, setSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
        setSticky(window.scrollY > 50);
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  return (
    <div className='header'>

        <div className={`navbar ${sticky ? 'sticky-nav' : ''}`}>
            <img src={logo} />

            
           

            {/* <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Blogs</li>
                <li>Contact Us</li>
            </ul> */}
            <div className="side-elements">
                {/* <CiSearch size="1.5rem" /> */}
                <button className='btn' onClick={openPopup}>Apply Now <span className='btn-icon'><FaArrowRightLong /></span></button>
            </div>
            
        </div>
                <a
                    href="https://wa.me/918684031003" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="bottom-left-element bottom-element"> <SiWhatsapp /></span>
                </a>
                <a href="tel:+918684031003" >
                    <span className="bottom-right-element bottom-element"> <MdCall /></span>
                </a>
        <Hero/>
        <Bottom/>
        <Course openPopup={openPopup}/>
        <Free/>
        <About openPopup={openPopup}/>
        {/* <Offers/> */}
        <Stats />
        <Counter openPopup={openPopup}/>
        <Testimonials/>
        <Placement/>
        <Trainners/>
        <Success/>
        <Video/>
        <Certificate/>
        <Join/>
        <Choose/>
        <Footer/>

    </div>
  )
}

export default Header