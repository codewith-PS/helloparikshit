import { useEffect } from 'react';
import Nav from './nav'; // tumhara navbar component
import './App.css';
import Certificate from './certificate';
// import { Typewriter } from 'react-simple-typewriter';
// import { MdDownload } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";
// import { SiGithub } from "react-icons/si";
// import { FaInstagram } from "react-icons/fa";
// import { HiAcademicCap } from "react-icons/hi2";
// import { TfiMedall } from "react-icons/tfi";
// import { MdLocalPhone } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import { MdLocationOn } from "react-icons/md";
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
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Mid/>} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}
