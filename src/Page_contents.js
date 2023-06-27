import React from "react";
import { Link } from 'react-router-dom';
import back_button from "./images/back_icon.png";
import spidy from "./images/spidy.png";
import './Page_contents.css';
import portal from './images/portal.png';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Page_contents(){
    return (
        <>
           <div className='cross-button'>
                <Link to="/"><img src={back_button} alt="back" className="back_button" /></Link>
            </div> 
            <div className="spidy">
                <img src={spidy} alt="spidy" className="classic" />
            </div>
            <div className="portal">
                <img src={portal} alt="portal" className="portal" />
            </div>
            <div className='title'>
                <div className='font-face-gm'>
                <Link to="/Page"><h3>Orange Horizons</h3></Link>
                    <h3>Cherry Delight</h3>
                    <h3>Vaporflow</h3>
                    <h3>Vitt Kosh</h3>
                    <h3>Krita</h3>
                    <h3>Ikshana</h3>
                    <h3>Lorem ipsue corrupti</h3>
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                    <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                    <FontAwesomeIcon icon="fa-solid fa-at" />
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </div></div>
        </>
    );
}