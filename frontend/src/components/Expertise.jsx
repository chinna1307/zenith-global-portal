import React from 'react';
import { Heart, BadgeDollarSign, Activity, Lock, Database, FileText, BarChart, ShieldCheck } from 'lucide-react';

const Expertise = () => {
    return (
        <section id="expertise" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Deep domain knowledge in healthcare and financial services, delivering solutions that meet the highest standards of security, compliance, and user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-500 p-4 rounded-full shadow-lg">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Healthcare Solutions</h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Transforming healthcare delivery with innovative SaaS applications and AI-powered solutions that improve patient outcomes and operational efficiency.
                        </p>
                        <div className="bg-green-50 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            <div className="flex items-center gap-2"><Activity className="h-5 w-5 text-green-600" /><span className="text-gray-800 font-medium">Patient Management</span></div>
                            <div className="flex items-center gap-2"><Database className="h-5 w-5 text-green-600" /><span className="text-gray-800 font-medium">Electronic Health Records</span></div>
                            <div className="flex items-center gap-2"><Heart className="h-5 w-5 text-green-600" /><span className="text-gray-800 font-medium">Telemedicine Platforms</span></div>
                            <div className="flex items-center gap-2"><FileText className="h-5 w-5 text-green-600" /><span className="text-gray-800 font-medium">Medical Imaging</span></div>
                            <div className="flex items-center gap-2"><BarChart className="h-5 w-5 text-green-600" /><span className="text-gray-800 font-medium">Healthcare Analytics</span></div>
                            <div className="flex items-center gap-2"><Lock className="h-5 w-5 text-green-600" /><span className="text-gray-800 font-medium">HIPAA Compliance</span></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-indigo-500 p-4 rounded-full shadow-lg">
                                <BadgeDollarSign className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Financial Services</h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Building robust financial applications with enterprise-grade security, real-time processing, and comprehensive compliance features.
                        </p>
                        <div className="bg-indigo-50 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            <div className="flex items-center gap-2"><BarChart className="h-5 w-5 text-indigo-600" /><span className="text-gray-800 font-medium">Trading Platforms</span></div>
                            <div className="flex items-center gap-2"><BadgeDollarSign className="h-5 w-5 text-indigo-600" /><span className="text-gray-800 font-medium">Payment Processing</span></div>
                            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-indigo-600" /><span className="text-gray-800 font-medium">Risk Management</span></div>
                            <div className="flex items-center gap-2"><Lock className="h-5 w-5 text-indigo-600" /><span className="text-gray-800 font-medium">Compliance Monitoring</span></div>
                            <div className="flex items-center gap-2"><Activity className="h-5 w-5 text-indigo-600" /><span className="text-gray-800 font-medium">Financial Analytics</span></div>
                            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-indigo-600" /><span className="text-gray-800 font-medium">Security Protocols</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Expertise;