import React from "react"
import { Fade } from "react-reveal"
import emoji from "react-easy-emoji"
import landingPerson from "../assets/lottie/landingPerson"
import DisplayLottie from "./DisplayLottie"
import SocialMedia from "./SocialMedia"
import Button from "./Button"
import { illustration, greeting } from "../portfolio"
import manOnTable from "../../../public/manOnTable.svg"

export default function Greeting() {
    if (!greeting.displayGreeting) {
        return null
    }
    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1
                                className="dark-mode greeting-text">
                                {" "}
                                {greeting.title}{" "}
                                <span className="wave-emoji">{emoji("👋")}</span>
                            </h1>
                            <p className="dark-mode greeting-text-p">
                                {greeting.subTitle}
                            </p>
                            <SocialMedia />
                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact" />
                            </div>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={landingPerson} />
                        ) : (
                            <img
                                alt="man sitting on table"
                                src={manOnTable}
                            ></img>
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    )
}
