import React from "react";
import "./Workcard.css";
import WorkCard from "./WorkCard";

function Worker() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCard.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Worker;
