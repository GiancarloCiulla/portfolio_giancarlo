import React from "react";
import { highlights } from "../data/profile";

const ExperienceSummary = () => {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Valor profesional</p>
          <h2>Experiencia destacada</h2>
          <p>
            Perfil con recorrido en coordinacion tecnologica y foco en resultados para entornos B2B y producto.
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
