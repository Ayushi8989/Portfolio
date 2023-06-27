import './App.css';
import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from 'react-router-dom';
import Projects from "./Project";
import Page from "./Page";

function App() {
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