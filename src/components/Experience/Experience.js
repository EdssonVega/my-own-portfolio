import React from "react";
import ExperienceCards from "./experienceCards/experienceCards";
import "./Experience.css"
import foto1 from "../../images/fc1.PNG"
import foto2 from "../../images/fc2.PNG"
import foto3 from "../../images/fc3.PNG"
import foto4 from "../../images/fc4.PNG"
import fcap1 from "../../images/fcap2.PNG"
import fcap2 from "../../images/fcap3.PNG"
import fcap3 from "../../images/fcap4.PNG"
import fcap4 from "../../images/fcap5.PNG"
import dvi1 from "../../images/dvi1.PNG"
import dvi2 from "../../images/dvi2.PNG"
import dvi3 from "../../images/dvi3.PNG"
import dvi4 from "../../images/dvi4.PNG"
import nl1 from "../../images/nl1.PNG"
import nl2 from "../../images/nl2.PNG"
import nl3 from "../../images/nl3.PNG"
import nl4 from "../../images/nl4.PNG"


const experiences = [
    {   
        tittle:"Fitness Club landing page",
        Fecha:"December 2023 - March 2024",
        Posicion: "Front End developer - AndeanUX",
        Descripcion: "Front-end developer in the project Fitness Club, a web page created using Next Js technology. The project will help users have a better experience and comfort when choosing a sports center",
        f1:foto1,
        f2:foto2,
        f3:foto3,
        f4:foto4,
        Link:"https://www.fitnessclubpass.com"
    },
    {
        tittle:"Fitness Club admin panel",
        Fecha:"March 2024 - May 2024",
        Posicion: "Front End developer - AndeanUX",
        Descripcion: "Front-end developer in the creaction of the admin panel for the Fitness Club webpage. The project allows administrators to register new users and save their necessary data in a convenient and interactive interface",
        f1:fcap1,
        f2:fcap2,
        f3:fcap3,
        f4:fcap4,
        Link:"https://www.fitnessclubpass.com"
    },
    {
        tittle:"Digital Verification Identity",
        Fecha:"June 2024- August 2024",
        Posicion: "Front End developer - AndeanUX",
        Descripcion: "Front-end developer in the development of the web app where users can register by using the webcam of their devices, we implemented tensorflow technology for facial and object recognition so the registration can be easy and dynamic without pressing any button",
        f1:dvi1,
        f2:dvi2,
        f3:dvi3,
        f4:dvi4,
        Link:"https://www.fitnessclubpass.com"
    },
    {
        tittle:"Neoled web page",
        Fecha:"June 2024- September 2024",
        Posicion: "Front End developer - Freelancer project",
        Descripcion: "Front-end developer in the creation of the web page of a lightingstore, the page is simple and allows the owner to add new items for the catalogue section in the admin panel, users can search and add products to the cart that the administrador will receive as a WhatsApp message. (The project doesn't count with e-commerce,the client only wanted to receive the orders as a WhatsApp message)",
        f1:nl1,
        f2:nl2,
        f3:nl3,
        f4:nl4,
        Link:"https://www.fitnessclubpass.com"
    }
]



function ExperienceSection(){
    return(
        <section className="experienceSection" id="experience">
                <h1>EXPERIENCIA</h1>
                <div className="showExperiences">
                    {experiences.map((experience,index)=>(
                        <ExperienceCards tittle={experience.tittle} date={experience.Fecha} position={experience.Posicion} positionDescription={experience.Descripcion} key={index} foto1={experience.f1} foto2={experience.f2} foto3={experience.f3} foto4={experience.f4} url={experience.Link}/>
                    )
                    )
                    }
                </div>
        </section>
    )
}

export default ExperienceSection