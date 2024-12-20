import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Portfolio.scss";

const projects = [
    {
        title: "vihsible",
        description: "Un chatbot creado para la FELTGBI+ desarrolado con dos backs dos front y conectados a un LLM para una respuesta personalizada",
        image: `${process.env.PUBLIC_URL}/images/vihsible.png`, 
        repoLink: "https://github.com/GiancarloCiulla/psico_final_proyect",
        deployLink: "https://chatbot-ai-felgtbi.netlify.app/",
    },
    {
        title: "Espacio para el alma",
        description: "Blog personal para una psicóloga, realizado con React y un back que permite la edición completa del blog desde un panel de administrador bastante intuitivo.",
        image: `${process.env.PUBLIC_URL}/images/psico_web.png`,
        repoLink: "https://github.com/GiancarloCiulla/psico_final_proyect",
        deployLink: "https://psico-blog-demo.netlify.app", 
    },
    {
        title: "Proyecto 3",
        description: "Descripción breve del proyecto número 3.",
        image: `${process.env.PUBLIC_URL}/images/enproceso.jpeg`,
        repoLink: "https://github.com/GiancarloCiulla/psico_final_proyect",
        deployLink: "https://psico-blog-demo.netlify.app",
    },
    {
        title: "Proyecto 4",
        description: "Un chatbot creado para la FELTGBI+ desarrolado con dos backs dos front y conectados a un LLM para una respuesta personalizada",
        image: `${process.env.PUBLIC_URL}/images/vihsible.png`, 
        image: `${process.env.PUBLIC_URL}/images/enproceso.jpeg`,
        deployLink: "https://chatbot-ai-felgtbi.netlify.app/",
    },
    {
        title: "Proyecto 5",
        description: "Blog personal para una psicóloga, realizado con React y un back que permite la edición completa del blog desde un panel de administrador bastante intuitivo.",
        image: `${process.env.PUBLIC_URL}/images/enproceso.jpeg`,
        repoLink: "https://github.com/GiancarloCiulla/psico_final_proyect",
        deployLink: "https://psico-blog-demo.netlify.app", 
    },
    {
        title: "Proyecto 6",
        description: "Descripción breve del proyecto número 3.",
        image: `${process.env.PUBLIC_URL}/images/enproceso.jpeg`,
        repoLink: "https://github.com/GiancarloCiulla/psico_final_proyect",
        deployLink: "https://psico-blog-demo.netlify.app",
    },
];


const Portfolio = () => {
    return (
        <section className="portfolio-section">
            <h2>Mis Proyectos</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    repoLink={project.repoLink} 
                    deployLink={project.deployLink} 
                />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
