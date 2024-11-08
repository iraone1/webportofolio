
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile'; 
import Project from './Project';
import Education from './Education';  
import Experience from './Experience';
import './App.css';
import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa';


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true); // Language toggle state

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const toggleLanguage = () => {
        setIsEnglish(prevLang => !prevLang);
    };

    return (
        <Router>
           
            <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="header">
                    <div className="nav2">
                        <FaGlobe onClick={toggleLanguage} className="icon" title="Change Language" />
                        {isDarkMode 
                            ? <FaSun onClick={toggleTheme} className="icon" title="Light Mode" /> 
                            : <FaMoon onClick={toggleTheme} className="icon" title="Dark Mode" />
                        }        
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>
            
        </Router>
    );
};

export default App;
