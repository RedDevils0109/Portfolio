import "./ProjectCard.css";
import React from "react";

function ProjectCard({
    project: { title, imageSrc, description, skills, demo, source },
}) {
    return (
        <div className="card-container">
            <div className="img-container"><img
                src={imageSrc}
                alt={'project img'}
                className="image"
            /></div>

            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <ul className="skills">
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className="skill">
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className="links">
                <a href={demo} className="link">
                    Demo
                </a>
                <a href={source} className="link">
                    Source
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
