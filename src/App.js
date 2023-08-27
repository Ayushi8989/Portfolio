import './App.css';
import React, {useEffect} from "react";
import Homepage from "./Homepage";
import { Routes, Route } from 'react-router-dom';
import Page from "./Page";
import Projects from "./Project";

function App() {
  useEffect(() => {
    document.title = "Portfolio | ayushhee"; 
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;