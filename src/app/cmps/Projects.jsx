import React from "react"
import { projects } from "../portfolio"
import { Fade } from "react-reveal"

export default function Projects() {
    function openUrlInNewTab(url) {
        if (!url) {
            return
        }
        var win = window.open(url, "_blank")
        win.focus()
    }

    if (!projects.display) {
        return null
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
                <div>
                    <h1 className="skills-heading">{projects.title}</h1>
                    <p
                        className="dark-mode project-subtitle">
                        {projects.subtitle}
                    </p>

                    <div className="projects-container">
                        {projects.projects.map((project, i) => {
                            return (
                                <div
                                    key={i}
                                    className="dark-mode project-card project-card-dark">
                                    {project.image ? (
                                        <div className="project-image">
                                            <img
                                                src={project.image}
                                                alt={project.projectName}
                                                className="card-image"
                                            ></img>
                                        </div>
                                    ) : null}
                                    <div className="project-detail">
                                        <h5
                                            className="dark-mode card-title">
                                            {project.projectName}
                                        </h5>
                                        <p
                                            className="dark-mode card-subtitle">
                                            {project.projectDesc}
                                        </p>
                                        {project.footerLink ? (
                                            <div className="project-card-footer">
                                                {project.footerLink.map((link, i) => {
                                                    return (
                                                        <span
                                                            key={i}
                                                            className="dark-mode project-tag" onClick={() => openUrlInNewTab(link.url)}>
                                                            {link.name}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    )
}
