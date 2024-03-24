import React from "react"
import Headroom from "react-headroom"
import {
    greeting,
    skillsSection,
} from "../portfolio"

export default function Header() {
    const viewSkills = skillsSection.display

    return (
        <Headroom>
            <header className="dark-menu header">
                <a href="/" className="logo">
                    <span className="grey-color">&lt;</span>
                    <span className="logo-name">{greeting.username}</span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style={{ color: "white" }}
                >
                    <span className="navicon navicon-dark"></span>
                </label>
                <ul className="dark-menu menu">
                    {viewSkills && (
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                    )}
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    )
}
