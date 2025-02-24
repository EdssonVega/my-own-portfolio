import React from "react";
import "./Hero.css";
import { GrLinkedin } from "react-icons/gr"
import { FaGithubSquare } from "react-icons/fa"
import { GrDocumentDownload } from "react-icons/gr"
import cv from "../../resume Edsson Vega.pdf"


function HeroSection(){
    return(
        <section className="hero">
            <div className="titulo">
                <h2 className="position">Hello! My name is</h2>
                <h1 className="name">EDSSON VEGA</h1>
                <h2 className="position">Front End developer</h2>
                <a  href={cv} download>
                    <button className="resumeButton">
                        <GrDocumentDownload className="hoja"/>RESUME
                    </button>
                </a>
                <div className="socialMediaIcons">
                    <a href="https://www.linkedin.com/in/edsson-edmundo-vega-torrico-432705303/" target="_blank"><GrLinkedin className="linkedInIcon"/></a>
                    <a href="https://github.com/EdssonVega" target="_blank"><FaGithubSquare className="githubIcon"/></a> 
                </div>
            </div>
            <div className="adorno">
                
            </div>
        </section>
    )
}

export default HeroSection