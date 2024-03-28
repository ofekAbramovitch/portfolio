import React from "react"
import SocialMedia from "./SocialMedia"
import { contactInfo } from "../portfolio"
import { Fade } from "react-reveal"

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main py-20 text-white" id="contact">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">{contactInfo.title}</h1>
                        <p className="text-lg mb-10">{contactInfo.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {contactInfo.number && (
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <a className="block p-4 bg-green-500 rounded text-center
                                 text-lg hover:bg-green-600 transition duration-200" href={"tel:" + contactInfo.number}>
                                    {contactInfo.number}
                                </a>
                            </div>
                        )}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <a className="block p-4 bg-red-500 rounded text-center
                             text-lg hover:bg-red-600 transition duration-200" href={"mailto:" + contactInfo.email_address}>
                                {contactInfo.email_address}
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </Fade>
    )
}