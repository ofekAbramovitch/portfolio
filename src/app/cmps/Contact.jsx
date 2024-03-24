import React from "react"
import SocialMedia from "./SocialMedia"
import { contactInfo } from "../portfolio"
import { Fade } from "react-reveal"

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main contact-margin-top" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="heading contact-title">{contactInfo.title}</h1>
                        <p
                            className="dark-mode contact-subtitle">
                            {contactInfo.subtitle}
                        </p>
                        <div
                            className="dark-mode contact-text-div">
                            {contactInfo.number && (
                                <>
                                    <a
                                        className="contact-detail"
                                        href={"tel:" + contactInfo.number}
                                    >
                                        {contactInfo.number}
                                    </a>
                                    <br />
                                    <br />
                                </>
                            )}
                            <a
                                className="contact-detail-email"
                                href={"mailto:" + contactInfo.email_address}
                            >
                                {contactInfo.email_address}
                            </a>
                            <br />
                            <br />
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}