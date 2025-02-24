import React from "react";
import "./AboutMe.css";
import SkillsCards from "./skill/skill";
import nextjs from "../../images/nextjs.PNG"
import html from "../../images/html-5.svg"
import css from "../../images/css-3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import typescript from "../../images/typescript-icon.svg"
import jira from "../../images/jira.svg"
import git from "../../images/git-icon.svg"
import foto from "../../images/fotoL.jpg"




const Skills = [
    {
        Name:"NEXT",
        Logo:nextjs,
        Nivel:"MEDIO"
    },
    {
        Name:"REACT",
        Logo:react,
        Nivel:"MEDIO"
    },
    {
        Name:"TYPESCRIPT",
        Logo:typescript,
        Nivel:"MEDIO"
    },
    {
        Name:"JIRA",
        Logo:jira,
        Nivel:"MEDIO"
    },
    {
        Name:"GIT",
        Logo:git,
        Nivel:"AVANZADO"
    },
    {
        Name:"HTML5",
        Logo:html,
        Nivel:"AVANZADO"
    },
    {
        Name:"CSS3",
        Logo:css,
        Nivel:"AVANZADO"
    },
    {
        Name:"JAVASCRIPT",
        Logo:javascript,
        Nivel:"AVANZADO"
    }
    
]


function AboutMeSection (){
    return(
        <section className="AboutMeSection" id="aboutMe">
            <div className="aboutMeContainer">
                <div className="descripcion">
                    <h1>ACERCA DE MI</h1>
                    <p>Me apasiona la ciencia y la tecnología, siempre me emociona descubrir como funcionan las cosas así que disfruto de aprender algo nuevo cada día. <br/>¿Qué te puedo decir? Ando dando mis primeros pasos en este mundo digital y me intriga saber toda la caminata que me espera.<br/>Hey! pero no te creas que soy un aburrido que solo habla de estudios y trabajo, si me invitas a ver una peli al cine, a nadar a la piscina o echarle una partida a un videojuego con gusto aceptaré!<br/> Total! La vida es un equilibrio entre los deberes y placeres. </p>
                </div>
                <div className="photoSection" >
                    <div className="yoContainer">
                        <img src={foto} className="yo" alt="foto personal" />
                    </div>
                </div>
            </div>
            <div className="skillsSection">
                <h1>HABILIDADES</h1>
                        <div className="skillsReal">
                        {Skills.map((Skill,index)=>(
                            <SkillsCards name={Skill.Name} image={Skill.Logo} nivel={Skill.Nivel} key={index}/>
                        )
                        )
                        }
                        </div>
            </div>
        </section>    
    )
}

export default AboutMeSection