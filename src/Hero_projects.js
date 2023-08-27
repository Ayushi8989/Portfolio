import React, { useEffect, useRef, useState }  from 'react';
import bg_project from './images/bg-project.png';
import dark_project_bg from './images/dark_bg_project.png';
import './Hero_projects.css';
import back_button from './images/back_icon.png';
import anim from './images/anim.png'
import dark_anim from './images/dark_anim.png'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backicon_dark from './images/backicon_dark.png';

export default function HeroProjects() {
  const elementRef = useRef(null);
    const [isLightMode, setIsLightMode] = useState(true);

    useEffect(() => {
        const element = elementRef.current;
        const parent = element.parentElement;

        const observerCallback = (mutationsList) => {
            const parentComputedStyle = window.getComputedStyle(parent);
            const parentBackgroundColor = parentComputedStyle.backgroundColor;

            const isLightMode = parentBackgroundColor === 'rgb(204, 230, 222)';
            setIsLightMode(isLightMode);
        };

        const observer = new MutationObserver(observerCallback);
        observer.observe(parent, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);
    var colour = isLightMode ? 'rgb(204, 230, 222)' : 'rgb(118, 96, 166)';

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setTimeout(() => {
      setMousePosition({ x: mouseX, y: mouseY });
    }, 10);
  };

  return (
    <div className='projectsection' ref={elementRef}>
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
      
        <div className="rounded"></div>
        <div className="pointed"></div>
        <div className='cross-button'>
          <Link to="/"><img src={isLightMode?back_button: backicon_dark} alt="back" className="back_button" /></Link>
        </div>
        <div className='buildings'>
          <img src={isLightMode ? bg_project: dark_project_bg} alt="project_bg" className="img-buildings" />
        </div>
        <div className="pinkz">
          <img src={isLightMode ? anim: dark_anim} alt='pinkz' className='pinkz' />
        </div>
        <div className="work">
          <div className="contents">
          <li>
            <div className='font-face-gm'>
              <a href='https://github.com/Ayushi8989/Vitt-kosh'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Vitt Kosh
              </h3>
              </a>
            </div>
            <h3>App & UI/UX Design</h3>
          </li>
          <li>
            <div className='font-face-gm'>
            <a href='https://github.com/Ayushi8989/Krita'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Krita
              </h3>
              </a>
            </div>
            <h3>App & UI/UX Design</h3>
          </li>
          <li>
            <div className='font-face-gm'>
            <a href='https://devfolio.co/projects/ikshana-99cf'>
              <h3>
                <span className='arrow-right'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
                Ikshana
              </h3>
              </a>
            </div>
            <h3>Web</h3>
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
          
          
          </div>
        </div>
    </div >
    </div>
  );
};
