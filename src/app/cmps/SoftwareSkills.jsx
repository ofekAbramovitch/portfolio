import React from "react"
import { skillsSection } from "../portfolio"
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiAngular, SiMongodb, SiTypescript, SiExpress, SiNestjs, SiRedux } from 'react-icons/si'
import { FaVuejs, FaNode } from 'react-icons/fa'

export default function SoftwareSkill() {
    const icons = {
        'html-5': SiHtml5,
        'css3': SiCss3,
        'sass': SiSass,
        'JavaScript': SiJavascript,
        'reactjs': SiReact,
        'nodejs': FaNode,
        'angular': SiAngular,
        'mongodb': SiMongodb,
        'vuejs': FaVuejs,
        'typescript': SiTypescript,
        'expressjs': SiExpress,
        'nestjs': SiNestjs,
        'redux': SiRedux,
    }
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.map((skill, index) => {
                        const IconComponent = icons[skill.skillName]
                        return (
                            <li key={index}>
                                {IconComponent && <IconComponent />}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}