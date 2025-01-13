import React, { useState } from "react";
import "../styles/Contact.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [hoverInfo, setHoverInfo] = useState({
        email: false,
        phone: false,
    });

    const handleMouseEnter = (field) => {
        setHoverInfo({ ...hoverInfo, [field]: true });
    };

    const handleMouseLeave = (field) => {
        setHoverInfo({ ...hoverInfo, [field]: false });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. ${message}`;
        const whatsappURL = `https://wa.me/34622001035?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
    };

    const handleEmail = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const mailto = `mailto:giancarlociulla.alfano@gmail.com?subject=Contacto%20desde%20el%20portafolio&body=Hola, soy ${name}. Mi correo es ${email}. ${message}`;
        window.location.href = mailto;
    };

    return (
        <section id="contact" className="contact">
            {/* Contenedor Superior */}
            <div className="contact-header">
                <h2>Contacto</h2>
                <p className="intro">
                    Estoy disponible para ofertas de trabajo, proyectos interesantes y oportunidades de colaboración. ¡Ponte en contacto conmigo!
                </p>
                {/* Opciones de contacto */}
                <div className="contact-options">
                    <a
                        href="https://linkedin.com/in/giancarlo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <i className="fab fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </a>
                    <a
                        href="https://github.com/GiancarloCiulla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <i className="fab fa-github"></i>
                        <p>GitHub</p>
                    </a>
                    <a
                        href="mailto:giancarlociulla.alfano@gmail.com"
                        className="contact-card"
                        onMouseEnter={() => handleMouseEnter("email")}
                        onMouseLeave={() => handleMouseLeave("email")}
                    >
                        <i className="fas fa-envelope"></i>
                        <p>
                            {hoverInfo.email ? "giancarlociulla.alfano@gmail.com" : "Email"}
                        </p>
                    </a>
                    <a
                        href="tel:+34622001035"
                        className="contact-card"
                        onMouseEnter={() => handleMouseEnter("phone")}
                        onMouseLeave={() => handleMouseLeave("phone")}
                    >
                        <i className="fas fa-phone"></i>
                        <p>{hoverInfo.phone ? "+34 622 001 035" : "Llamar"}</p>
                    </a>
                    <a
                        href="https://wa.me/34622001035"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <i className="fab fa-whatsapp"></i>
                        <p>WhatsApp</p>
                    </a>
                </div>
            </div>

            {/* Formulario de contacto */}
            <div className="contact-form">
                <h3>Formulario de Contacto</h3>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <div className="form-buttons">
                        <button onClick={handleWhatsApp}>Enviar a WhatsApp</button>
                        <button onClick={handleEmail}>Enviar por Correo</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
