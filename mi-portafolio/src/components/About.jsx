import React from "react";

const About = () => {
  return (
    <section className="section" id="sobre-mi">
      <div className="container about-layout">
        <div className="about-copy">
          <div className="section-heading compact">
            <p className="eyebrow">Sobre mi</p>
            <h2>Desarrollo con criterio de negocio</h2>
          </div>
          <p>
            Soy desarrollador web full stack con una base tecnica orientada al desarrollo de aplicaciones web y
            un perfil hibrido entre tecnologia, producto y gestion. Mi experiencia en coordinacion de proyectos
            digitales es complementaria y me aporta vision de negocio para traducir necesidades de usuario en
            soluciones funcionales, mantenibles y claras.
          </p>
          <ul className="about-highlights" aria-label="Puntos clave de perfil profesional">
            <li>Desarrollo full stack con React, Node.js y JavaScript</li>
            <li>Enfoque en producto, usabilidad y mantenibilidad</li>
            <li>Background en proyectos digitales y resolucion de problemas</li>
          </ul>
        </div>

        <figure className="about-photo-card" aria-label="Foto profesional de Giancarlo Ciulla">
          <div className="about-photo-media">
            <img src={`${process.env.PUBLIC_URL}/images/perfil.jpg`} alt="Giancarlo Ciulla" loading="lazy" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default About;
