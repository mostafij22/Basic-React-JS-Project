
import React from "react";
import './index.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

