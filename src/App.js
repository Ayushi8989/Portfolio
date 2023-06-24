import './App.css';
import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from 'react-router-dom';
import Projects from "./Project";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;