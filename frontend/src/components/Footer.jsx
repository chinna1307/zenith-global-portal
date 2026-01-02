import React from 'react';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* COLUMN 1: BRAND INFO (Your Code) */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold flex items-baseline">
                            Zenith<span className="text-teal-500">Global</span>
                            <span className="ml-2 text-sm font-semibold text-teal-500">Pvt Ltd</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses with AI-driven development and world-class IT staffing solutions.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* COLUMN 2: SERVICES */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-teal-400 transition">Custom Software Development</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">AI Integration</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Vibe Coding Solutions</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Healthcare SaaS</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Financial Applications</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Mobile Development</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">IT Consulting</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Global Staffing (US & India)</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">24/7 IT Support</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: INDUSTRIES */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Industries</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-teal-400 transition">Healthcare</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Financial Services</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Enterprise Software</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">E-commerce</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition">Education Tech</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: CONTACT */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-teal-500" />
                                <a href="mailto:admin@zenithglobal.com" className="hover:text-white transition">
                                    info@zenithglobalprivatelimited.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* COPYRIGHT BAR */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Zenith Global Private Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;