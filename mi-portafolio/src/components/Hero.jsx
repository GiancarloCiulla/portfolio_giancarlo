import React from "react";

const Hero = () => {
  return (
    <section className="hero section" aria-label="Presentacion principal">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Desarrollador Web Fullstack</p>
          <h1>Giancarlo Ciulla</h1>
          <p className="hero-subtitle">
            Desarrollador Web Fullstack con base tecnica en desarrollo de aplicaciones web. Construyo productos
            funcionales, escalables y centrados en el usuario con React, Node.js y una vision orientada a
            producto.
          </p>
          <p className="hero-support">
            Mi perfil hibrido entre desarrollo, producto y gestion complementa el enfoque tecnico con una
            ejecucion clara, organizada y alineada a objetivos de negocio.
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
          <p className="hero-panel-title">Perfil</p>
          <p className="hero-panel-description">
            Desarrollador web full stack con foco en interfaces claras, logica solida y productos digitales
            funcionales.
          </p>
          <ul className="hero-panel-points">
            <li>Frontend moderno con React y JavaScript</li>
            <li>Backend funcional con Node.js y Express</li>
            <li>Enfoque en producto, usabilidad y mantenibilidad</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
