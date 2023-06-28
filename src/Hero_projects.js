import React, { useState } from 'react';
import project_bg from './images/bg-project.png';
import './Hero_projects.css';
import back_button from './images/back_icon.png';
import pinkz from './images/anim.png'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroProjects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setTimeout(() => {
      setMousePosition({ x: mouseX, y: mouseY });
    }, 10);
  };



  return (
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
      <div className='projectsection'>
        <div className="rounded"></div>
        <div className="pointed"></div>
        <div className='cross-button'>
          <Link to="/"><img src={back_button} alt="back" className="back_button" /></Link>
        </div>
        <div className='buildings'>
          <img src={project_bg} alt="project_bg" className="img-buildings" />
        </div>
        <div className="pinkz">
          <img src={pinkz} alt='pinkz' className='pinkz' />
        </div>
        <div className="work">
          <div className="contents">
          <li>
            <div className='font-face-gm'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Vitt Kosh
              </h3>
            </div>
            <h3>UI/UX Design</h3>
          </li>
          <li>
            <div className='font-face-gm'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Krita
              </h3>
            </div>
            <h3>UI/UX Design</h3>
          </li>
            <li>
            <div className='font-face-gm'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Orange Horizons
              </h3>
            </div>
            <h3>Illustration</h3>
          </li>
          <li>
            <div className='font-face-gm'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Cherry Delight
              </h3>
            </div>
            <h3>3D-Modelling</h3>
          </li>
          <li>
            <div className='font-face-gm'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Vaporflow
              </h3>
            </div>
            <h3>Branding</h3>
          </li>
          
          
          </div>
        </div>
    </div >
    </div>
  );
};

