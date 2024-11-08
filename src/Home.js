// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import Typing from './components/Typing'; 
import MyScene from './components/MyScene'; 
import MyScene1 from './components/MyScene1';
import MyEarth from './components/Earth';
import MyPurple from './components/Purple';
import MySaturn from './components/Saturn';
import MyVenus from './components/Venus';
import './App.css';

const Home = ({ isDarkMode }) => {
    return (
        <>
        
     
          
            <p className="Paragraf">
                
                Hello, I'm <Typing key={isDarkMode} text="Muhammad Irawan" speed={150} />
               
                
            </p>
           
            <section className="portfolio">
                {isDarkMode ? <MyScene /> : <MyScene1 />}
            </section>
          

            <div className="grid-container">
                <Link to="/profile" className="grid-item profil">
                    <div className="earth-container">
                        <MyPurple />
                        <div className="profile-content">
                            <span className="icon"><FaUser /></span>
                            <p>Profile</p>
                        </div>
                    </div>
                </Link>
                <Link to="/project" className="grid-item project">
                    <div className="earth-container">
                        <MyEarth />
                        <div className="profile-content">
                            <span className="icon"><FaBriefcase /></span>
                            <p>Project</p>
                        </div>
                    </div>
                </Link>
                <Link to="/education" className="grid-item experience">
                    <div className="earth-container">
                        <MySaturn />
                        <div className="profile-content">
                            <span className="icon"><FaGraduationCap /></span>
                            <p>Education</p>
                        </div>
                    </div>
                </Link>
                <Link to="/experience" className="grid-item education">
                    <div className="earth-container">
                        <MyVenus />
                        <div className="profile-content">
                            <span className="icon"><FaTrophy /></span>
                            <p>Experience</p>
                        </div>
                    </div>
                </Link>
            </div>
            
        </>
    );
};

export default Home;
