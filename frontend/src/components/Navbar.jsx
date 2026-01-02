import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                        {/* IMPROVED LOGO DESIGN */}
                        <div className="flex items-baseline">
                            <span className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight">Zenith</span>
                            <span className="text-2xl md:text-3xl font-extrabold text-teal-600 tracking-tight">Global</span>
                            <span className="ml-2 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest border border-gray-200 px-1.5 py-0.5 rounded">Pvt Ltd</span>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
                        <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium transition">Services</button>
                        <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-blue-600 font-medium transition">Expertise</button>
                        <button onClick={() => scrollToSection('technologies')} className="text-gray-700 hover:text-blue-600 font-medium transition">Technologies</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</button>
                    </nav>
                    <div className="hidden md:block">
                        <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                            Partner With Us
                        </button>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden py-4 border-t bg-gray-50">
                        <nav className="flex flex-col space-y-4 px-4">
                            <Link to="/" className="text-gray-700 font-medium">Home</Link>
                            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 font-medium">Services</button>
                            <button onClick={() => scrollToSection('expertise')} className="text-left text-gray-700 font-medium">Expertise</button>
                            <button onClick={() => scrollToSection('technologies')} className="text-left text-gray-700 font-medium">Technologies</button>
                            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-center">Partner With Us</button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Navbar;