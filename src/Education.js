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
            </section>
        </div>
    );
};

export default Education;
