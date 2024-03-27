import emoji from "react-easy-emoji"
import splashAnimation from "./assets/lottie/splashAnimation"

const airbnb = "/airbnb.jpg"
const myday = "/myday.png"

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
    page applications using the latest web technologies including React, Vue, Angular, Typescript,
     Node.js, Express.js, MongoDB, SQL, etc.`
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
    subtitle: "Some of the technologies I use:",
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
            image: airbnb,
            projectName: "Airbnb Clone",
            projectDesc: `This project is an Airbnb clone, where users can search for rental properties based on location and dates, 
            view detailed information about each property, including photos, descriptions, reviews, and availability calendar,
            book rental properties directly through the website by selecting available dates and submitting payment information and 
            choose the location of the rental property on a map when looking for a property.`,
            footerLink: [
                {
                    name: "Visit website",
                    url: "https://my-react-airbnb-clone.netlify.app/"
                },
                {
                    name: "Visit repository",
                    url: "https://github.com/ofekAbramovitch/airbnb-clone"
                },
            ]
        },
        {
            image: myday,
            projectName: "MyDay",
            projectDesc: `Table-style task management board app inspired by Monday.com.
            Manage projects and tasks using a table board. A board contains groups, lists and tasks. 
            Usually each project is a board, and the groups and the tasks and titles to do in the project. 
            Users can modify the board and change group and task locations using Drag and Drop.
            Users can work together and watch live changes.`,
            footerLink: [
                {
                    name: "Visit website",
                    url: "https://monday-8oy3.onrender.com/"
                },
                {
                    name: "Visit repository",
                    url: "https://github.com/idandavid1/My-Day"
                },
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
