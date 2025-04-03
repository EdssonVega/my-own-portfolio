import React from "react";
import "./Project.css"
import ProjectCards from "./projectsCards/projectsCards";
import portafolioFoto from "../../images/portafolio.JPG"
import matricesFoto from "../../images/matrices.JPG"
import heroesSpaPhoto from "../../images/spa.JPG"

const projects = [
    {
      Title:"Portfolio",
      Description:"Personal Portfolio created with React" , 
      Image:portafolioFoto,
      ToGithub:"https://github.com/EdssonVega/my-own-portfolio",
      ToPage:"https://evtportfolio.netlify.app"
    },
    {
      Title:"Matrix operation",
      Description:"A little app that let the user do matrix operations with React" , 
      Image:matricesFoto,
      ToGithub:"https://github.com/EdssonVega/calculo-de-matrices",
      ToPage:"https://calculodematrices.netlify.app/"
    },
    {
        Title:"Heroes SPA",
        Description:"A single web page that uses the functionality of react router dom" , 
        Image:heroesSpaPhoto,
        ToGithub:"https://github.com/EdssonVega/hero-spa",
        ToPage:"https://herospa123.netlify.app"
      }
]



function ProjectSection(){
    return(
        <section className="projectsSection" id="projects">
                <h1>PROJECTS</h1>
                <div className="showProjects">
                    {projects.map((project,index)=>(
                        <ProjectCards title={project.Title} description={project.Description} image={project.Image} toGithub={project.ToGithub} toPage={project.ToPage} key={index}/>
                    ))}
                </div>
        </section>
    )
}

export default ProjectSection