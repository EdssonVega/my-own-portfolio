import React from "react";
import ExperienceCards from "./experienceCards/experienceCards";
import "./Experience.css";
import { experiences } from "./helpers/experiences";

function ExperienceSection() {
  return (
    <section className="experienceSection" id="experience">
      <h1>EXPERIENCE</h1>
      <div className="showExperiences">
        {experiences.map((experience, index) => (
          <ExperienceCards
            tittle={experience.tittle}
            date={experience.Fecha}
            position={experience.Posicion}
            positionDescription={experience.Descripcion}
            key={index}
            imageList={experience.imageList}
            url={experience.Link}
            notAllowedText={"Im not allowed to show pictures of the app until the release day"}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
