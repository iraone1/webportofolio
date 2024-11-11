import React, {  } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import MySaturn from './components/Saturn';
import { FaUser, FaBriefcase, FaTrophy, FaHome } from 'react-icons/fa';
const Education = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate('/');
    const navigateToProfile = () => navigate('/profile');
    const navigateToProject = () => navigate('/project');
    const navigateToExperience = () => navigate('/experience');

    return (
        <div>
            <div className="Navbar">
                <button onClick={handleBack}><span className="icon"><FaHome /></span></button>
                <button onClick={navigateToProfile}><span className="icon"><FaUser /></span></button>
                <button onClick={navigateToProject}><span className="icon"><FaBriefcase /></span></button>
                <button onClick={navigateToExperience}><span className="icon"><FaTrophy /></span></button>
            </div>
            <section className="portfolio">
                <MySaturn />
                <div className="modal2-overlay" >
                    <div className="modal2-content">
                            <ul>
                                <h1 style={{fontWeight:"bolder",fontSize:"30px",textAlign:"center"}}>Education</h1>
                                <li>
                                    <h3 style={{fontWeight:"bolder",fontSize:"20px"}}>Bachelor ,University 'Aisyiyah Yogyakarta</h3>
                                    <p>2020 - 2024</p>
                                    <p>Information Technology</p>
                                </li>
                                <li>
                                    <h3 style={{fontWeight:"bolder",fontSize:"20px"}}>High School, SMAN 2 Pangkalan Bun</h3>
                                    <p>2016 - 2019</p>
                                    <p>Mathematics and Natural Sciences.</p>
                                </li>
                            </ul>
                   </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
