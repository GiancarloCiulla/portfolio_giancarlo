import React from "react";
import "../styles/Home.scss";

const Home = () => {
    const skills = [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "React", icon: "fab fa-react" },
        { name: "IA Generativa", icon: "fas fa-robot" },
        { name: "SQL & MongoDB", icon: "fas fa-database" },
        { name: "TypeScript", icon: "fab fa-js-square" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Jest", icon: "fas fa-vial" },
        { name: "Cypress", icon: "fas fa-microscope" },
        { name: "Next.js", icon: "fas fa-code" }, 
        { name: "Redux", icon: "fas fa-dice-d20" },
    ];

    return (
        <section className="home">
            {/* Hero Section */}
            <div className="hero">
                <div className="hero-content">
                    <h1>
                        ¡Hola! Soy <span>Giancarlo Ciulla</span>
                    </h1>
                    <p>
                        Desarrollador Full Stack especializado en el diseño y desarrollo de aplicaciones web modernas, <strong>funcionales</strong> y <strong>eficientes</strong>. Con una sólida base en <strong>tecnologías front-end</strong> como React y <strong>back-end</strong> como Node.js, transformo ideas en soluciones digitales impactantes.
                    </p>
                    <p>
                        Apasionado por la <strong>innovación</strong>, mi enfoque combina la <strong>inteligencia artificial</strong>, el <strong>diseño limpio</strong>, y la experiencia del usuario para entregar proyectos que destacan por su <strong>calidad y rendimiento</strong>.
                    </p>
                    <p>
                        Cuando no estoy desarrollando, disfruto colaborar en proyectos que <strong>marcan la diferencia</strong> y explorar nuevas tendencias en tecnología.
                    </p>
                    <div className="buttons">
                        <a href="/portfolio" className="cta-button">
                            Ver mi Portafolio
                        </a>
                        <a
                            href={`${process.env.PUBLIC_URL}/cv_giancarlo.pdf`}
                            className="cta-button outline"
                            download
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Grid de Habilidades */}
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <i className={skill.icon}></i>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
