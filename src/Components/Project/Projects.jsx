import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
    return (
        <section id="project" className="project">
            <h2 className="titleProject">Projects</h2>
            <div className="projects">
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
}

export default Projects;
