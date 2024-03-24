import React from "react"
import "./SplashScreen.css"
import DisplayLottie from "./DisplayLottie"
import { greeting, splashScreen } from "../portfolio"

export default function SplashScreen() {
    return (
        <div className="dark-mode splash-container">
            <div className="splash-animation-container">
                <DisplayLottie animationData={splashScreen.animation} />
            </div>
            <div className="splash-title-container">
                <span className="grey-color"> &lt</span>
                <span className="splash-title">{greeting.username}</span>
                <span className="grey-color">/&gt</span>
            </div>
        </div>
    )
}
