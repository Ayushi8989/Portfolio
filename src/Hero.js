import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import animatedgwen from "./images/gwen.png";
import animated_leg from "./images/animated_leg.png"
import bg_asset from "./images/bg_asset.png"
import DD from "./images/DD.png"
import shadow from "./images/shadow.png"
import dark_gwen from "./images/dark_gwen.png"
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import "./Homepage.css"
import dark_shadow from "./images/dark_shadow.png"
import grid from "./images/grid_icon.png";
import dark_grid from "./images/dark_grid.png";


export default function MainPage() {
    const elementRef = useRef(null);
    const [isLightMode, setIsLightMode] = useState(true);

    useEffect(() => {
        const element = elementRef.current;
        const parent = element.parentElement;

        const observerCallback = (mutationsList) => {
            const parentComputedStyle = window.getComputedStyle(parent);
            const parentBackgroundColor = parentComputedStyle.backgroundColor;

            const isLightMode = parentBackgroundColor === 'rgb(212, 180, 183)';
            setIsLightMode(isLightMode);
        };

        const observer = new MutationObserver(observerCallback);
        observer.observe(parent, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);
    var colour = isLightMode ? 'rgb(156, 124, 139)' : 'rgb(26, 26, 26)';
    
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setTimeout(() => {
        setMousePosition({ x: mouseX, y: mouseY });
      }, 10);
    };
  


  return (
    
        <div className="main" ref={elementRef}>
            <div onMouseMove={handleMouseMove}>
      <div
        className="cursor-rounded"
        style={{
          position: 'fixed',
          top: mousePosition.y,
          left: mousePosition.x,
          transform: 'translate(-50%, -50%)',
          transformStyle: 'smooth',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '3px solid white',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      ></div>
      <div
        className="cursor-pointed"
        style={{
          position: 'fixed',
          top: mousePosition.y,
          left: mousePosition.x,
          transform: 'translate(-50%, -50%)',
          transformStyle: 'decimal',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'white',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      ></div>
            <nav>
                <ul className="Nav-contents">
                    <li>
                        <Link to="/Projects"><img src={isLightMode ? grid : dark_grid} alt="grid-icon" className="grid-icon" /></Link>
                    </li>
                </ul>
            </nav>
            <div className="mascot">
                <img src={isLightMode ? animatedgwen : dark_gwen} alt="animatedgwen" className="animatedgwen" />
                <img src={animated_leg} alt="leg" className="leg" />
                <img src={isLightMode ? shadow : dark_shadow} alt="shadow" className="shadow" />
                <img src={bg_asset} alt="bg-asset" className="bg-asset" />
            </div>
            <div className="Developer">
                <img src={DD} alt="DD" />
            </div>
            <div className="icons">
                <li><Link to="https://twitter.com/ayushhee">
                    <FontAwesomeIcon icon="fa-brands fa-twitter"
                        style={{ color: colour, }} className="twitter" /></Link>
                </li>
                <li><Link to="https://dribbble.com/ayushhee">
                    <FontAwesomeIcon icon="fa-brands fa-dribbble"
                        style={{ color: colour, }} className="dribble" /></Link>
                </li>
                <li><Link to="https://github.com/Ayushi8989">
                    <FontAwesomeIcon icon="fa-brands fa-github"
                        style={{ color: colour, }} className="github" /></Link>
                </li>
                <li><Link to="https://www.linkedin.com/in/ayushhee">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in"
                        style={{ color: colour, }} className="linkedin" /></Link>
                </li>
            </div>
        </div>
</div>
    );
}