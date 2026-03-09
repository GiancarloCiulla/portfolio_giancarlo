import React from "react";
import { softSkills, techStack } from "../data/profile";

const stackGroups = [
  { id: "frontend", title: "Frontend", items: techStack.frontend },
  { id: "backend", title: "Backend", items: techStack.backend },
  { id: "databases", title: "Bases de datos", items: techStack.databases },
  { id: "tools", title: "Herramientas", items: techStack.tools }
];

const TechStack = () => {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Stack tecnologico</p>
          <h2>Tecnologias y herramientas</h2>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.id} className="stack-card">
              <h3>{group.title}</h3>
              <div className="pill-list">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Idiomas y soft skills</h3>
          <div className="pill-list">
            {softSkills.map((skill) => (
              <span key={skill} className="pill muted">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
