import React from 'react';
import project_bg from './images/project_bg.png';
import './Hero_projects.css';
import back_button from './images/back_icon.png';
import pinkz from './images/anim.png'
import { Link } from 'react-router-dom';

export default function HeroProjects() {
    return (
        <div className='projectsection'>
            <div className='cross-button'>
            <Link to="/"><img src={back_button} alt="back" className="back_button" /></Link>
            </div>
            <div className='project_bg'>
                <img src={project_bg} alt="project_bg" className="project_bg" />
            </div>
            <div className="pinkz">
                <img src={pinkz} alt='pinkz' className='pinkz'/>
            </div>
            <div className='project-title'>
                <div className='font-face-gm'>
                <h3>Orange Horizons</h3>
                <h3>Cherry Delight</h3>
                <h3>Vaporflow</h3>
                <h3>Vitt Kosh</h3>
                <h3>Krita</h3>
                <h3>Ikshana</h3>
                <h3>Lorem ipsue corrupti</h3>
            </div></div>
        </div>
    );
}