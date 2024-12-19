import React from "react";
import "../styles/ProyectCard.scss"; // Estilo de la tarjeta

const ProjectCard = ({ title, description, image, repoLink, deployLink }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-buttons">
                    <a href={deployLink} target="_blank" rel="noopener noreferrer" className="project-button demo">
                        Ver Despliegue
                    </a>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-button repo">
                        Ver Repositorio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
