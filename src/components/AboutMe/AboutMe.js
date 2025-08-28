import React from "react";
import "./AboutMe.css";
import SkillsCards from "./skill/skill";
import foto from "../../images/fotoL.jpg"
import { skills } from "./helpers/skills";



function AboutMeSection (){
    return(
        <section className="AboutMeSection" id="aboutMe">
            <div className="aboutMeContainer">
                <div className="descripcion">
                    <h1>ABOUT ME</h1>
                    <p>I love science and technology, I am always excited to discover how things work so I enjoy learning something new every day. <br/> What can I tell you? I'm taking my first steps in this digital world and I'm intrigued by the journey that awaits me. <br/>Hey! but don't think that I'm a bore who only talks about studies and work, if you invite me to watch a movie at the cinema, swim in the pool or play a video game I will gladly accept!<br/>Life is a balance between duties and pleasures.</p>
                </div>
                <div className="photoSection" >
                    <div className="yoContainer">
                        <img src={foto} className="yo" alt="foto personal" />
                    </div>
                </div>
            </div>
            <div className="skillsSection">
                <h1>SKILLS</h1>
                        <div className="skillsReal">
                        {skills.map((Skill,index)=>(
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