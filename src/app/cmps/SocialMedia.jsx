import React from "react"
import { socialMediaLinks } from "../portfolio"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialMedia() {
    if (!socialMediaLinks.display) {
        return null
    }
    return (
        <div className="social-media-div">
            {socialMediaLinks.github ? (
                <a href={socialMediaLinks.github} className="icon-button github"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    <span></span>
                </a>
            ) : null}
            {socialMediaLinks.linkedin ? (
                <a href={socialMediaLinks.linkedin} className="icon-button linkedin"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <span></span>
                </a>
            ) : null}
            {socialMediaLinks.gmail ? (
                <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="mail" icon={faEnvelope} />
                    <span></span>
                </a>
            ) : null}
        </div>
    )
}
