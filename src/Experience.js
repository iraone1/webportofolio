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
                <div className="modal3-overlay" >
                    <div className="modal3-content">
                            <ul>
                                <h1 style={{fontWeight:"bolder",fontSize:"30px",textAlign:"center"}}>Experience</h1>
                                <li>
                                    <h3 style={{fontWeight:"bolder",fontSize:"15px"}}>[Skripsi Game Edukasi Kesehatan Berbasis Desktop Menggunakan Unity 
                                        dengan Metode Game Development Life Cycle]• [game developer] </h3>
                                    <p>Membuat game 2D Platformer platfrom desktop </p>
                                    <p>[Juli 2024]–[Agustus 2024] </p>
                                </li>
                                <li>
                                    <h3 style={{fontWeight:"bolder",fontSize:"15px"}}>[Magang Game Developer Kampus merdeka]• [game developer] • [PT. 
                                        Media Kreasi Abadi] </h3>
                                    <p>Membuat game 2D platform android</p>
                                    <p>[Agustus 2022]–[Desember 2022] </p>
                                </li>
                                <li>
                                    <h3 style={{fontWeight:"bolder",fontSize:"15px"}}>[Bank Mandiri Mobile Apps Developer Project Based Internship Program]• 
                                    [Mobile Developer] • [Company Bank Mandiri]  </h3>
                                    <p>Membuat aplikasi android list film dengan menggunakan API TMDB </p>
                                    <p>[April 2024]–[Mei 2024]  </p>
                                </li>
                            </ul>
                   </div>
                </div>            
            </section>
        </div>
    );
};

export default Experience;
