import './App.css';
import React, {useState} from "react";
import ReactSwitch from "react-switch";
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import './Homepage.css'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
      <div className='page'>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
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
            handleDiameter={20}
            width={50}
          />
        </div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
    </div>
  );
}

export default App;
