import React from "react"
import SoftwareSkills from "./SoftwareSkills"
import { illustration, skillsSection } from "../portfolio"
import { Fade } from "react-reveal"
import codingPerson from "../assets/lottie/codingPerson.json"
import DisplayLottie from "./DisplayLottie"
import activity from "../assets/img/developerActivity.svg"

export default function Skills() {
    if (!skillsSection.display) {
        return null
    }
    return (
        <div className="dark-mode main" id="skills">
            <div className="skills-main-div">
                <Fade left duration={1000}>
                    <div className="skills-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={codingPerson} />
                        ) : (
                            <img
                                alt="Man Working"
                                src={activity}
                            ></img>
                        )}
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1 className="dark-mode skills-heading">
                            {skillsSection.title}{" "}
                        </h1>
                        <p
                            className="dark-mode subTitle skills-text-subtitle">
                            {skillsSection.subTitle}
                        </p>
                        <SoftwareSkills />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
