import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Portfolio.scss";

const projects = [
    {
        title: "vihsible",
        description: "Un chatbot creado para la FELTGBI+ desarrolado con dos backs dos front y conectados a un LLM para una respuesta personalizada.",
        image: `${process.env.PUBLIC_URL}/images/vihsible.png`, 
        deployLink: "https://chatbot-ai-felgtbi.netlify.app/"
    },
    {
        title: "Espacio para el alma",
        description: "Blog personal para una psicóloga, realizado con React y un back que permite la edición completa del blog desde un panel de administrador bastante intuitivo.",
        image: `${process.env.PUBLIC_URL}/images/psico_web.png`,
        deployLink: "https://psico-blog-demo.netlify.app" 
    },
    {
        title: "La cota 1000",
        description: "Juego para moviles, retro y sencillo de un skater el cual debe evitar caer en los huecos, realizado con react y guardando datos en firestore.",
        image: `${process.env.PUBLIC_URL}/images/lacota1000.png`,
        deployLink: "https://lacota1000.netlify.app/",
    },
    {
        title: "WheatherApp",
        description: "Aplicacion del tiempo, nos facilita el clima por semanas basado en temperatura máxima y minima.", 
        image: `${process.env.PUBLIC_URL}/images/Wheatherapp.png`,
        deployLink: "https://weatherappgc.netlify.app",
    },
    {
        title: "Proyecto 5",
        description: "En proceso...",
        image: `${process.env.PUBLIC_URL}/images/`,
        deployLink: "",
    },
    {
        title: "Proyecto 6",
        description: "En proceso...",
        image: `${process.env.PUBLIC_URL}/images/enproceso.jpeg`,
        deployLink: "",
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
