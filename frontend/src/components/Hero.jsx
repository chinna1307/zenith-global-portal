import React from 'react';
import { Sparkles, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                            <Sparkles className="h-4 w-4" />
                            <span>AI-Powered Innovation</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                            Future-Proof Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Digital Vision</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Zenith Global Solutions delivers enterprise-grade SaaS, AI integration, and IT staffing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                                Start Your Project <ArrowRight className="h-5 w-5" />
                            </a>
                            <a href="#technologies" className="px-8 py-4 rounded-full font-bold text-lg text-blue-700 border-2 border-blue-100 hover:border-blue-600 transition flex items-center justify-center">
                                View Technologies
                            </a>
                        </div>
                    </div>
                    <div className="relative lg:h-full flex justify-center items-center">
                        <div className="relative bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 w-full max-w-md">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4"><div className="bg-green-100 p-3 rounded-full"><Shield className="h-6 w-6 text-green-600" /></div><div><h3 className="font-bold text-gray-900">Enterprise Security</h3><p className="text-sm text-gray-500">Bank-grade encryption</p></div></div>
                                <div className="flex items-center gap-4"><div className="bg-blue-100 p-3 rounded-full"><CheckCircle className="h-6 w-6 text-blue-600" /></div><div><h3 className="font-bold text-gray-900">Cloud Scalability</h3><p className="text-sm text-gray-500">AWS & Azure Certified</p></div></div>
                                <div className="flex items-center gap-4"><div className="bg-purple-100 p-3 rounded-full"><Sparkles className="h-6 w-6 text-purple-600" /></div><div><h3 className="font-bold text-gray-900">AI Integration</h3><p className="text-sm text-gray-500">Smart automation ready</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;