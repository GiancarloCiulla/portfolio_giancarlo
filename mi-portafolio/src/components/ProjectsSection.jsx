import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section className="section projects-section" id="proyectos">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Proyectos</p>
          <h2>Portfolio seleccionado</h2>
          <p>
            Tres proyectos elegidos para mostrar enfoque de producto, capacidad tecnica y criterio de implementacion.
          </p>
        </div>

        {featuredProject && <ProjectCard project={featuredProject} />}

        <div className="projects-grid">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
