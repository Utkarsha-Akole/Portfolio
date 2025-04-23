import React, { useState } from "react";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import './works.css'

const Works = () =>{
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const projects = [
        {
            id: 1,
            image: Portfolio1,
            title: "Project 1",
            description: "A modern web application built with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            id: 2,
            image: Portfolio2,
            title: "Project 2",
            description: "E-commerce platform with secure payment integration",
            technologies: ["React", "Express", "Stripe"],
            link: "#"
        },
        {
            id: 3,
            image: Portfolio3,
            title: "Project 3",
            description: "Social media dashboard with real-time analytics",
            technologies: ["React", "Firebase", "Chart.js"],
            link: "#"
        },
        {
            id: 4,
            image: Portfolio4,
            title: "Project 4",
            description: "Task management application with team collaboration",
            technologies: ["React", "Redux", "Socket.io"],
            link: "#"
        },
        {
            id: 5,
            image: Portfolio5,
            title: "Project 5",
            description: "Weather application with location-based forecasts",
            technologies: ["React", "OpenWeather API", "Geolocation"],
            link: "#"
        },
        {
            id: 6,
            image: Portfolio6,
            title: "Project 6",
            description: "Recipe finder with advanced search and filtering",
            technologies: ["React", "Edamam API", "Material-UI"],
            link: "#"
        }
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return(
        <section id="works">
            <h2 className="worksTitle"> My Portfolio</h2>
            <span className="worksDesc">I take in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                {projects.map((project) => (
                    <img
                        key={project.id}
                        src={project.image}
                        alt={project.title}
                        className="worksImg"
                        onClick={() => handleProjectClick(project)}
                    />
                ))}
            </div>
            <button className="worksBtn">See More</button>

            {showModal && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <div className="technologies">
                            {selectedProject.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Works;