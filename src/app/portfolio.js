import emoji from "react-easy-emoji"
import splashAnimation from "./assets/lottie/splashAnimation"

const splashScreen = {
    enabled: true,
    animation: splashAnimation,
    duration: 2000
}

const illustration = {
    animated: true
}

const greeting = {
    username: "Ofek Abramovitch",
    title: "Hi, I'm Ofek",
    subTitle: emoji(
        `A Full Stack/Frontend developer with knowledge and experience in writing single 
    page applications using the latest web technologies.`
    ),
    displayGreeting: true
}

const socialMediaLinks = {
    github: "https://github.com/ofekAbramovitch",
    linkedin: "https://www.linkedin.com/in/ofek-abramovitch/",
    gmail: "ofek301156@gmail.com",
    display: true
}

const skillsSection = {
    title: "My skills",

    softwareSkills: [
        {
            skillName: "html-5",
        },
        {
            skillName: "css3",
        },
        {
            skillName: "sass",
        },
        {
            skillName: "JavaScript",
        },
        {
            skillName: "reactjs",
        },
        {
            skillName: "nodejs",
        },
        {
            skillName: "angular",
        },
        {
            skillName: "mongodb",
        },
        {
            skillName: "vuejs",
        },
        {
            skillName: "typescript",
        },
        {
            skillName: "expressjs",
        },
        {
            skillName: "nestjs",
        },
        {
            skillName: "redux",
        },
    ],
    display: true
}

const projects = {
    title: "Projects",
    projects: [
        {
            image: require("../../public/airbnbLogo.png"),
            projectName: "Airbnb Clone",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://my-react-airbnb-clone.netlify.app/"
                }
            ]
        },
        {
            image: require("../../public/myday.png"),
            projectName: "MyDay",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://monday-8oy3.onrender.com/"
                }
            ]
        }
    ],
    display: true
}

const contactInfo = {
    title: emoji("Contact Me 🤳"),
    number: "+972523356764",
    email_address: "ofek301156@gmail.com"
}

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    projects,
    contactInfo,
}
