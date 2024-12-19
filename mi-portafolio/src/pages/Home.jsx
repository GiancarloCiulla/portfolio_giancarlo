import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
        { name: "Next.js", icon: "fab fa-nextjs" },
        { name: "TypeScript", icon: "fab fa-js-square" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Jest", icon: "fas fa-vial" },
        { name: "Cypress", icon: "fas fa-microscope" },
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

            {/* Carrusel de Habilidades */}
            <div className="skills-carousel">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto" // Ocupar espacio automáticamente
                    spaceBetween={20}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        waitForTransition: false,
                        speed: 4000, // Velocidad constante
                    }}
                    loop={true} // Repetición infinita
                    allowTouchMove={false} // Desactivar interacción manual
                    style={{ width: "100%", height: "auto" }}
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index} className="skill-card">
                            <i className={skill.icon}></i>
                            <p>{skill.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Home;
