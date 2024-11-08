import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MyPurple from './components/Purple';
import {  FaBriefcase, FaGraduationCap, FaHome, FaTrophy } from 'react-icons/fa';

const Profile = () => {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/'); 
    };

    const navigateToProject = () => {
        navigate('/project'); 
    };

    const navigateToEducation = () => {
        navigate('/education'); 
    };

    const navigateToExperience = () => {
        navigate('/experience');
    };

    return (
        <div>
            <div className="Navbar">
                <button onClick={handleBack}><span className="icon"><FaHome /></span></button>
                <button onClick={navigateToProject}><span className="icon"><FaBriefcase /></span></button>
                <button onClick={navigateToEducation}><span className="icon"><FaGraduationCap /></span></button>
                <button onClick={navigateToExperience}><span className="icon"><FaTrophy /></span></button>
            </div>
            <section className="portfolio">
                <MyPurple /> 
            <div className="modal1-overlay" >
                <div className="modal1-content">
                    <p style={{fontWeight:'bolder'}}>Hello, my name is Muhammad Irawan. I am a computer science graduate. I was born in Kudus on June 7, 2000. I am a Muslim. I like space.</p>          
                </div>
            </div>
            <div className='Contact'>
                <div className="contact-info">
                    <img src="2011501018-Teknologi_Informasi-Muhammad_Irawan-removebg-preview (1).png" alt="Profile" className="img profile" />
                    <p style={{ marginLeft:'1%',fontSize:'25px',fontWeight:'bold' }}>Contact Person</p>
                    <p>
                        <a href="https://wa.me/6281477182186" target="_blank" rel="noopener noreferrer" className="unstyled-link">
                            <FontAwesomeIcon icon={faWhatsapp} /> +6281477182186
                        </a>
                    </p>
                    <p>
                        <a href="mailto:irawanm125@gmail.com" className="unstyled-link">
                            <FontAwesomeIcon icon={faEnvelope} /> irawanm125@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/muhammad-irawan-7aaa652b1" target="_blank" rel="noopener noreferrer" className="unstyled-link">
                            <FontAwesomeIcon icon={faLinkedin} /> MUHAMMAD IRAWAN
                        </a>
                    </p>
                </div>
            </div>      
               
            </section>
           
        </div>
        
    );
};

export default Profile;
