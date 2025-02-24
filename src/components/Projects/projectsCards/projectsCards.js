import React from "react";
import "./projectsCards.css";
import { FaGithub } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";



function ProjectCards ({title,description,image,toGithub,toPage}){
    return(
        <div className="projectContainer">
            <img src={image} className="projectImage"/>
            <div className="projectText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="projectButtons">
                <a href={toGithub} target="_blank"><button className="toGitCode">Code <FaGithub /></button></a>
                <a href={toPage} target="_blank"><button className="toHost">Demo <TfiNewWindow /></button></a>
            </div>
        </div>
    )
}

export default ProjectCards