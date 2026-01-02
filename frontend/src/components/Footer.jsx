import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="text-2xl font-bold">Zenith<span className="text-teal-500">Global</span></div>
                        <p className="text-gray-400 text-sm leading-relaxed">Empowering businesses with AI-driven development and world-class IT staffing solutions.</p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Zenith Global Private Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;