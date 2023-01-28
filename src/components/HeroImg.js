import React from "react";
import { Link } from "react-router-dom";
import "./HeroImg.css";
function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://media.designrush.com/articles/244453/conversions/how-to-make-a-graphic-design-portfolio-details.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <p>Hi, I am Front-End-developer </p>
        <h1>React Js Developer</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default HeroImg;
