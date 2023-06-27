import React from "react";
import "./Navbar.css";
import grid from "./images/grid_icon.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul className="Nav-contents">
        <li>
          <Link to="/Projects"><img src={grid} alt="grid-icon" className="grid-icon" /></Link>
        </li>
      </ul>
    </nav>
  );
}