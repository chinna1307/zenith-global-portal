import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            if (id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        // HEADER HEIGHT: h-28 (112px)
        <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* FLEX CONTAINER matches Header Height */}
                <div className="flex justify-between items-center h-28"> 
                    
                    {/* LOGO SECTION */}
                    <div className="flex items-center cursor-pointer h-full" onClick={() => scrollToSection('home')}>
                        <img 
                            src={logo} 
                            alt="Zenith Global Pvt Ltd" 
                            // CORRECTED: h-24 (96px) fits perfectly inside h-28
                            // h-80 was too big (320px)
                            className="h-80 w-auto object-contain" 
                        />
                    </div>
                    
                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition text-lg">Home</button>
                        <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium transition text-lg">Services</button>
                        <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-blue-600 font-medium transition text-lg">Expertise</button>
                        <button onClick={() => scrollToSection('technologies')} className="text-gray-700 hover:text-blue-600 font-medium transition text-lg">Technologies</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition text-lg">Contact</button>
                    </nav>

                    {/* PARTNER BUTTON */}
                    <div className="hidden md:block">
                        <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-7 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-lg">
                            Partner With Us
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        {isOpen ? <X className="h-8 w-8 text-gray-700" /> : <Menu className="h-8 w-8 text-gray-700" />}
                    </button>
                </div>

                {/* MOBILE DROPDOWN */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t bg-gray-50">
                        <nav className="flex flex-col space-y-4 px-4">
                            <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 font-medium text-lg">Home</button>
                            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 font-medium text-lg">Services</button>
                            <button onClick={() => scrollToSection('expertise')} className="text-left text-gray-700 font-medium text-lg">Expertise</button>
                            <button onClick={() => scrollToSection('technologies')} className="text-left text-gray-700 font-medium text-lg">Technologies</button>
                            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center text-lg">Partner With Us</button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Navbar;