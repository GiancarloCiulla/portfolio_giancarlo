import React from "react";
import "../styles/Contact.scss"; // Importa el estilo que crearemos

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Contacto</h2>
            <p>¡Puedes ponerte en contacto conmigo a través de los siguientes enlaces!</p>

            <div className="contact-links">
                <a href="https://www.linkedin.com/in/giancarlo-ciulla/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/GiancarloCiulla" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="mailto:giancarlociulla.alfano@gmail.com">
                    <i className="fas fa-envelope"></i> giancarlociulla.alfano@gmail.com
                </a>
                <a href="tel:+34 622 001 035">
                    <i className="fas fa-phone"></i> +34 622 001 035
                </a>
            </div>
        </section>
    );
};

export default Contact;
