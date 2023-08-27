import './App.css';
import React, { useState } from "react";
import ReactSwitch from "react-switch";
import HeroProjects from './Hero_projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='Projects'>
      <div className={isDarkMode ? 'darkk-mode' : 'lightt-mode'}>
        <div className='switch'>
          <ReactSwitch className='custom-switch'
            checked={isDarkMode}
            onChange={toggleMode}
            uncheckedIcon={
              <></>
            }
            checkedIcon={
              <></>
            }
            offColor='#9B7C8B'
            onColor='#1A1A1A'
            onHandleColor='#aaa8a8'
            handleDiameter={20}
            width={50}
          />
        </div>
        <HeroProjects />
      </div>
    </div>
  );
}

export default App;
