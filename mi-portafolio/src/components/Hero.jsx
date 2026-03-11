import React from "react";

const Hero = () => {
  return (
    <section className="hero section" aria-label="Presentación principal">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">DESARROLLADOR WEB FULLSTACK</p>
          <h1>Giancarlo Ciulla</h1>
          <p className="hero-subtitle">
            Desarrollador web full stack con formación técnica en sistemas y especialización en desarrollo web
            en The Bridge. Construyo aplicaciones funcionales, escalables y centradas en el usuario con
            JavaScript, React y Node.js.
          </p>
          <p className="hero-support">
            Mi experiencia en proyectos tecnológicos B2B y plataformas digitales me permite combinar criterio
            técnico, organización y foco en la experiencia de uso para desarrollar soluciones claras y
            mantenibles.
          </p>
          <div className="hero-actions">
            <a href="#proyectos">Ver proyectos</a>
            <a
              href="https://www.linkedin.com/in/giancarlo-ciulla/"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-action"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/GiancarloCiulla"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-action"
            >
              GitHub
            </a>
            <a href={`${process.env.PUBLIC_URL}/images/FullstackCV.pdf`} download className="ghost-action">
              Descargar CV
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <p className="hero-panel-title">PERFIL</p>
          <p className="hero-panel-description">
            Desarrollo web con foco en producto, arquitectura funcional y experiencia de usuario, apoyado por
            experiencia real en plataformas y coordinación técnica.
          </p>
          <ul className="hero-panel-points">
            <li>Frontend con React, JavaScript y SASS</li>
            <li>Backend con Node.js, testing y lógica funcional</li>
            <li>Bases de datos, despliegue y trabajo bajo Agile</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
