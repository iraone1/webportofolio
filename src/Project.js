import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import MyEarth from './components/Earth';
import { FaUser, FaTrophy, FaGraduationCap, FaHome } from 'react-icons/fa';



const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const projectData = [
        {
            title: 'Desktop Based 2D Platformer Game',
            description: 'Thesis Project with the title: Desktop-Based Health Education Game with Unity using the Game Development Life Cycle Method. This game is 2D with a platform genre. This educational game requires players to pass obstacles. Players also have missions that must be completed. Players must defeat the boss to bring up the finish line. When defeating the boss, players will be asked questions about PHBS. Players will get factual information about PHBS after answering questions. This game is designed so that teenagers can play and learn the importance of PHBS at the same time.',
            link: 'https://irawan125.itch.io/health-education.',
            imageUrl: '/GameEdukasi.png',
        },
        {
            title: 'Proyek 2',
            description: 'Deskripsi singkat proyek 2',
            link: '/project-detail/2',
            imageUrl: '/images/proyek2.jpg',
        },
    ];

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    const navigateToProject = () => {
        navigate('/profile');
    };

    const navigateToEducation = () => {
        navigate('/education');
    };

    const navigateToExperience = () => {
        navigate('/experience');
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < projectData.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const currentProject = projectData[currentIndex];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Add an event listener for the "Escape" key to close the modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div>
            <div className="Navbar">
                <button onClick={handleBack}>  <span className="icon"><FaHome /></span></button>
                <button onClick={navigateToProject}>  <span className="icon"><FaUser /></span></button>
                <button onClick={navigateToEducation}>  <span className="icon"><FaGraduationCap /></span></button>
                <button onClick={navigateToExperience}>  <span className="icon"><FaTrophy /></span></button>
            </div>
            <section className="portfolio">
                <MyEarth />
            </section>
            <div className="project-card">
                <button className="arrow left-arrow" onClick={handlePrevious}>Previous</button>
                
                <div className="project-content">
                    <h3>{currentProject.title}</h3>
                    <img src={currentProject.imageUrl} alt={currentProject.title} className="project-image" />
                    <p className="Deskripsi">{currentProject.description}</p>
                    <button className="see-details-button" onClick={openModal}>See Details</button>
                </div>
                
                <button className="arrow right-arrow" onClick={handleNext}>Next</button>
            </div>

            {/* Modal for project details */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>X</button>
                        <h3 style={{ textAlign: 'center' }}>{currentProject.title}</h3>

                        <img src={currentProject.imageUrl} alt={currentProject.title} className="modal-image" />
                        <p>{currentProject.description}</p>
                        <a href={currentProject.link} className="see-details-link" onClick={closeModal} target="_blank" rel="noopener noreferrer">
                            Go to Project Details
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
