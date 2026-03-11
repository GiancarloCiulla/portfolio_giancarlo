import React from "react";

const About = () => {
  return (
    <section className="section" id="sobre-mi">
      <div className="container about-layout">
        <div className="about-copy">
          <div className="section-heading compact">
            <p className="eyebrow">SOBRE MÍ</p>
            <h2>Desarrollo con criterio técnico y visión de producto</h2>
          </div>
          <p>
            Tengo formación técnica en sistemas y especialización reciente en desarrollo web full stack. Mi
            trayectoria profesional también me ha llevado a coordinar proyectos tecnológicos y gestionar
            plataformas, lo que me ha dado una visión más completa para traducir necesidades de negocio y de
            usuario en soluciones funcionales, mantenibles y claras. Me interesa construir herramientas útiles,
            bien pensadas y con una experiencia de uso consistente.
          </p>
          <ul className="about-highlights" aria-label="Puntos clave de perfil profesional">
            <li>Formación técnica + Bootcamp Full Stack en The Bridge</li>
            <li>Desarrollo de aplicaciones completas, bases de datos y testing</li>
            <li>Perfil híbrido entre desarrollo, plataforma y resolución de problemas</li>
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
