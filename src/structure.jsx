import './app.css';
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Mail, FileText, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Structure() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/', type: 'route', icon: Home },
        { name: 'Skills', href: '#skills', type: 'scroll', icon: Briefcase },
        { name: 'Certificate', href: '#certificate', type: 'scroll', icon: Award },
        { name: 'Projects', href: '#projects', type: 'scroll', icon: FileText },
        { name: 'Contact', href: '#contact', type: 'scroll', icon: Mail },
    ];

    const handleNavigation = (item) => {
        setIsOpen(false);
        if (item.type === 'scroll') {
            const element = document.querySelector(item.href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (item.type === 'route') {
            navigate(item.href); // internal route navigation
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'backdrop-blur-md shadow-lg text-white'
                : 'bg-transparent'
                }`} style={{ backgroundColor: '#19102A' }} id='fset'>
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="#home"
                                className="text-2xl font-bold bg-gradient-to-r transition-all duration-300 text-white"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation({ href: '#home', type: 'scroll' });
                                }}
                            >
                                Parikshit
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item)}
                                        className="relative group px-3 py-2 text-1xl font-medium text-white hover:text-blue-600 transition-all duration-300"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {item.name}
                                        </span>
                                        <div className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        {/* <div className="md:hidden"> */}
                            {/* <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button> */}
                        {/* </div> */}
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {/* <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md shadow-lg border-t border-gray-200/20" style={{ backgroundColor: '#140C22' }}>
                        {navItems.map((item, index) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavigation(item)}
                                className="group flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium justify-center text-white hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div> */}
            </nav>

            {/* Optional keyframe animation */}
            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
