import React from "react";
import "./Hero.css";
import animatedgwen from "./images/gwen.png";
import animated_leg from "./images/animated_leg.png"
import bg_asset from "./images/bg_asset.png"
import DD from "./images/DD.png"
import shadow from "./images/shadow.png"
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div className="main">
            <img src={animatedgwen} alt="animatedgwen" className="animatedgwen" />
            <img src={animated_leg} alt="leg" className="leg" />
            <img src={shadow} alt="shadow" className="shadow" />
            <img src={bg_asset} alt="bg-asset" className="bg-asset" />
            {/* <div className="text"><h3 className="font-face-gm"></h3></div> */}
            <div className="Developer">
                <img src={DD} alt="DD" />
            </div>
            <div className="icons">
            <li><Link to="https://twitter.com/ayushhee"><FontAwesomeIcon icon="fa-brands fa-twitter" className="twitter"/></Link></li>
            <li><Link to="https://dribbble.com/_ayushhee"><FontAwesomeIcon icon="fa-brands fa-dribbble" className="dribble" /></Link></li>
            <li><Link to="https://github.com/Ayushi8989"><FontAwesomeIcon icon="fa-brands fa-github" className="github"/></Link></li>
            <li><Link to="https://www.linkedin.com/in/ayushi-singh-3660a6229/"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="linkedin" /></Link></li>
                    
                    
                    
            
            </div>
        </div>
    );
}