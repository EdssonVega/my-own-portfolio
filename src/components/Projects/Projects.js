import React from "react";
import "./Project.css"
import ProjectCards from "./projectsCards/projectsCards";
import portafolioFoto from "../../images/portafolio.JPG"
import matricesFoto from "../../images/matrices.PNG"

const projects = [
    {
      Title:"Portfolio",
      Description:"Personal Portfolio created with React" , 
      Image:portafolioFoto,
      ToGithub:"https://github.com/EdssonVega/portafolio-web",
      ToPage:"https://evtportfolio.netlify.app"
    },
    {
      Title:"Matrix operation",
      Description:"A little app that let the user do matrix operations with React" , 
      Image:matricesFoto,
      ToGithub:"https://github.com/EdssonVega/calculo-de-matrices",
      ToPage:"https://calculodematrices.netlify.app/"
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