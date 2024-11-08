import React, {  } from 'react';
import { useNavigate } from 'react-router-dom';
import MyVenus from './components/Venus';
import './Style.css';
import { FaUser, FaBriefcase, FaGraduationCap, FaHome } from 'react-icons/fa';


const Experience = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    const navigateToProject = () => {
        navigate('/profile');
    };

    const navigateToEducation = () => {
        navigate('/project');
    };

    const navigateToExperience = () => {
        navigate('/education');
    };

    return (
        <div>
            <div className="Navbar">
                <button onClick={handleBack}><span className="icon"><FaHome /></span></button>
                <button onClick={navigateToProject}><span className="icon"><FaUser /></span></button>
                <button onClick={navigateToEducation}><span className="icon"><FaBriefcase /></span></button>
                <button onClick={navigateToExperience}><span className="icon"><FaGraduationCap /></span></button>
            </div>
            <section className="portfolio">
                <MyVenus />              
            </section>
        </div>
    );
};

export default Experience;
