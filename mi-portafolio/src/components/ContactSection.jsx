import React from "react";

const ContactSection = () => {
  return (
    <section className="section contact-section" id="contacto">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">CONTACTO</p>
          <h2>Hablemos</h2>
          <p>
            Actualmente busco oportunidades como desarrollador web full stack. Si quieres conocer más sobre mi
            trabajo, mi experiencia en proyectos digitales o valorar una posible colaboración, estaré encantado
            de conectar.
          </p>
        </div>

        <div className="contact-grid">
          <a href="mailto:giancarlociulla.alfano@gmail.com">
            <span>Email</span>
            <strong>giancarlociulla.alfano@gmail.com</strong>
          </a>
          <a href="https://www.linkedin.com/in/giancarlo-ciulla/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <strong>Ver perfil profesional</strong>
          </a>
          <a href="https://github.com/GiancarloCiulla" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <strong>Repositorios y proyectos</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
