import React from "react";
import { highlights } from "../data/profile";

const ExperienceSummary = () => {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">VALOR PROFESIONAL</p>
          <h2>Experiencia destacada</h2>
          <p>
            Experiencia en proyectos digitales, plataformas y entornos B2B, combinando ejecución técnica,
            coordinación y mejora continua.
          </p>
        </div>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSummary;
