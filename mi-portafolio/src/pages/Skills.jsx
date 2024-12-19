import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/Skills.scss";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "TypeScript", icon: "fab fa-js-square" },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Habilidades</h2>
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    speed: 4000,
                }}
                loop={true}
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index} className="skill-card">
                        <i className={skill.icon}></i>
                        <p>{skill.name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Skills;
