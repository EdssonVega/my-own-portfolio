import React from "react";
import "./experienceCards.css";
import { FaCalendarDays } from "react-icons/fa6";

function ExperienceCards ({tittle,date,position,positionDescription,foto1,foto2,foto3,foto4,url}){
    return(
        <div className="experienceCardContainer">
            <h1>{tittle}</h1>
            <h2>{position}</h2>
            <h3><FaCalendarDays />{date}</h3>
            <p>{positionDescription}</p>
            <div className="experiencePhotosContainer">
                <div className="enlace"><img src={foto1} /></div>
                <div className="enlace"><img src={foto2} /></div>
                <div className="enlace"><img src={foto3} /></div>
                <div className="enlace"><img src={foto4} /></div>
            </div>
        </div>
    )
}

export default ExperienceCards