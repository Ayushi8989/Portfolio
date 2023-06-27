import React, {useState} from 'react';
import project_bg from './images/bg-project.png';
import './Hero_projects.css';
import back_button from './images/back_icon.png';
import pinkz from './images/anim.png'
import { Link } from 'react-router-dom';

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
            <div className='project-title'>
                <div className='font-face-gm'>
                <Link to="/Page"><h3>Orange Horizons</h3></Link>
                    <h3>Cherry Delight</h3>
                    <h3>Vaporflow</h3>
                    <h3>Vitt Kosh</h3>
                    <h3>Krita</h3>
                    <h3>Ikshana</h3>
                    <h3>Lorem ipsue corrupti</h3>
                </div></div>
        </div>
    </div>
  );
};

