import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MyPurple from './components/Purple';
import { FaBriefcase, FaGraduationCap, FaHome, FaTrophy } from 'react-icons/fa'; // Using FaCube as a placeholder for Unity
import { SiReact, SiCodeigniter, SiFlutter, SiKotlin, SiUnity } from 'react-icons/si'; // Other specific icons

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

    // Helper function to render stars
    const renderStars = (count) => {
        return '★'.repeat(count) + '☆'.repeat(5 - count); // Filling to a max of 5 stars
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
                <div className="modal1-overlay">
                    <div className="modal1-content">
                        <p style={{ fontWeight: 'bolder' }}>Hello, my name is Muhammad Irawan. I am a computer science graduate. I was born in Kudus on June 7, 2000. I am a Muslim. I like space.</p>
                    </div>
                </div>
                <div className="Contact">
                    <div className="contact-info">
                        <img src="2011501018-Teknologi_Informasi-Muhammad_Irawan-removebg-preview (1).png" alt="Profile" className="img profile" />
                        <p style={{ marginLeft: '1%', fontSize: '25px', fontWeight: 'bold' }}>Contact Person</p>
                        <p>
                            <a href="https://wa.me/6281477182186" target="_blank" rel="noopener noreferrer" className="unstyled-link">
                                <FontAwesomeIcon icon={faWhatsapp} className="large-icon" /> +6281477182186
                            </a>
                        </p>
                        <p>
                            <a href="mailto:irawanm125@gmail.com" className="unstyled-link">
                                <FontAwesomeIcon icon={faEnvelope} className="large-icon" /> irawanm125@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/muhammad-irawan-7aaa652b1" target="_blank" rel="noopener noreferrer" className="unstyled-link">
                                <FontAwesomeIcon icon={faLinkedin} className="large-icon" /> MUHAMMAD IRAWAN
                            </a>
                        </p>
                    </div>
                    
                    {/* Skills Section */}
                    {/* Skills Section */}
<div className="skill">
    <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>Skills</h3>
    <ul className="skill-list">
        <li>
            <SiUnity className="skill-icon" /> Unity
            <span className="skill-stars">{renderStars(4)}</span>
        </li>
        <li>
            <SiReact className="skill-icon" /> React.js
            <span className="skill-stars">{renderStars(3)}</span>
        </li>
        <li>
            <SiCodeigniter className="skill-icon" /> CodeIgniter
            <span className="skill-stars">{renderStars(3)}</span>
        </li>
        <li>
            <SiFlutter className="skill-icon" /> Flutter
            <span className="skill-stars">{renderStars(2)}</span>
        </li>
        <li>
            <SiKotlin className="skill-icon" /> Kotlin
            <span className="skill-stars">{renderStars(2)}</span>
        </li>
    </ul>
</div>

                </div>
            </section>
        </div>
    );
};

export default Profile;
