import React from "react";
import "./experienceCards.css";
import { FaCalendarDays } from "react-icons/fa6";

function ExperienceCards({
  tittle,
  date,
  position,
  positionDescription,
  url,
  imageList,
  notAllowedText
}) {
  return (
    <div className="experienceCardContainer">
      <h1>{tittle}</h1>
      <h2>{position}</h2>
      <h3>
        <FaCalendarDays />
        {date}
      </h3>
      <p>{positionDescription}</p>
      <div className="experiencePhotosContainer">
        {imageList.length === 0 
        ? <div className="notImagesAllowedDiv" >{notAllowedText}</div> 
        :imageList.map((image) => (
          <div key={image} alt={""} className="enlace">
            <img src={image} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ExperienceCards;
