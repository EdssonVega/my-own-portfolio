import React from "react";
import "./skill.css"

function SkillsCards({name,image,nivel}){
    return(
        <div className="container">
            <img src={image} alt={name} className="logoSkill"/>
            <div className="nameSkill">
                {name}
                <div className="nivel">
                    {nivel}
                </div>
            </div>
        </div>
    )
}

export default SkillsCards