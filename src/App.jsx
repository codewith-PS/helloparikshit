import { useEffect } from 'react';
import Nav from './nav';
import './App.css';
import Certificate from './certificate';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mid from './mid';
import Project from './project';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Mid />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  );
}
