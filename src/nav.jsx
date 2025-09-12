import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const navItems = ['Home', 'Skills', 'Certificate', 'Projects', 'Contact'];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const goToHome = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (section !== "home") {
          document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Delay to allow route change
    } else {
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-lg text-white' : 'bg-transparent'
        }`}
      style={{ backgroundColor: '#19102A' }}
      id="fset"
    >
      <div data-aos="fade-down" className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-lg" style={{fontFamily:"roboto"}}>
          {/* Logo */}
          <div
            className="cursor-pointer text-2xl font-bold text-white"
            onClick={() => navigate("/")}
          >
            Parikshit
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 items-baseline space-x-8">
            {navItems.map((name) =>
              name === "Certificate" ? (
                <a
                  key={name}
                  href="/certificate"
                  onClick={handleLinkClick}
                  className="cursor-pointer relative group px-3 py-2 text-1xl font-medium text-white transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-black">{name}</span>
                  <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </a>
              ) : name === "Projects" ? (
                <a
                  key={name}
                  href="/project"
                  rel="noopener noreferrer"
                  className="cursor-pointer relative group px-3 py-2 text-1xl font-medium text-white transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-black">{name}</span>
                  <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </a>
              ) : location.pathname !== "/" ? (
                <span
                  key={name}
                  className="cursor-pointer relative group px-3 py-2 text-1xl font-medium text-white transition-all duration-300"
                  onClick={() => {
                    goToHome(name.toLowerCase());
                    handleLinkClick();
                  }}
                >
                  <span className="relative z-10 group-hover:text-black">{name}</span>
                  <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </span>
              ) : (
                <Link
                  key={name}
                  to={name.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  className="cursor-pointer relative group px-3 py-2 text-1xl font-medium text-white transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-black">{name}</span>
                  <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-2 pt-2 pb-3 space-y-1 flex flex-col items-center backdrop-blur-md shadow-lg border-t border-gray-200/20"
          style={{ backgroundColor: '#140C22' }}
        >
          {navItems.map((name) =>
            name === "Certificate" ? (
              <a
                key={name}
                href="/certificate"
                onClick={handleLinkClick}
                className="block relative group px-40 py-3 text-white font-medium transition-all duration-200"
              >
                <span className="relative z-10 group-hover:text-black">{name}</span>
                <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </a>
            ) : name === "Projects" ? (
              <a
                key={name}
                href="/project"
                onClick={handleLinkClick}
                className="block relative group px-40 py-3 text-white font-medium transition-all duration-200"
              >
                <span className="relative z-10 group-hover:text-black">{name}</span>
                <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </a>
            ) : location.pathname !== "/" ? (
              <span
                key={name}
                onClick={() => {
                  goToHome(name.toLowerCase());
                  handleLinkClick();
                }}
                className="block relative group px-40 py-3 text-white font-medium transition-all duration-200"
              >
                <span className="relative z-10 group-hover:text-black">{name}</span>
                <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </span>
            ) : (
              <Link
                key={name}
                to={name.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
                className="block relative group px-40 py-3 text-white font-medium transition-all duration-200"
              >
                <span className="relative z-10 group-hover:text-black">{name}</span>
                <div className="absolute inset-0 border border-transparent group-hover:bg-white rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
