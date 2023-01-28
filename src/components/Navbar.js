import React, { useState } from "react";
import "./Navbarstyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const [color, setColor] = useState(false);
  const changes = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changes);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Personal Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="sushi" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff " }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
