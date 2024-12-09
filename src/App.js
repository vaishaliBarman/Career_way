import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Career from './components/Career';
import About from './components/About';
import Study from './components/ Study';
import Traditional from './components/Traditional'; // Traditional Page
import Vocational from './components/Vocational'; // Vocational Page
import CareerOption from './components/CareerOption';
import Explorer from './components/Explorer';
import Study1 from './components/Study1';
import Study2 from './components/Study2';
import Graduation from './components/Graduation';
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is outside Routes, so it displays on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/study" element={<Study />} />
        <Route path="/traditional" element={<Traditional />} />
        <Route path="/vocational" element={<Vocational />} /> {/* Route for Vocational */}
        <Route path="study1" element={<Study1 />} />
        <Route path="/careerOption" element={<CareerOption />} />
        <Route path="/explorer" element={<Explorer/>} />
        <Route path="/study2" element={<Study2/>} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="explorer" element={<Explorer />} />

         
      </Routes>
    </Router>
  );
}

export default App;
