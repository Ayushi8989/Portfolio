import './App.css';
import React from "react";
import Footer from './Footer';
import HeroProjects from './Hero_projects';
import './Project.css';

function App() {
    return (
      <div className='container'>
        <HeroProjects />
        <Footer />
      </div>
  );
}

export default App;
