import React from 'react';
import { Code, Smartphone, Cloud, Zap, Shield, Headphones, Users, Globe } from 'lucide-react';

const Services = () => {
    const services = [
        { icon: <Code className="h-8 w-8" />, title: "Custom Software", description: "Tailored web and desktop solutions.", color: "from-blue-500 to-blue-600" },
        { icon: <Smartphone className="h-8 w-8" />, title: "Mobile Apps", description: "Native & cross-platform.", color: "from-teal-500 to-teal-600" },
        { icon: <Cloud className="h-8 w-8" />, title: "Cloud Solutions", description: "Scalable architecture on AWS/Azure.", color: "from-purple-500 to-purple-600" },
        { icon: <Zap className="h-8 w-8" />, title: "AI Integration", description: "Machine learning & analytics.", color: "from-orange-500 to-orange-600" },
        { icon: <Shield className="h-8 w-8" />, title: "Cybersecurity", description: "Audits & compliance.", color: "from-green-500 to-green-600" },
        { icon: <Headphones className="h-8 w-8" />, title: "IT Support", description: "24/7 managed services.", color: "from-indigo-500 to-indigo-600" },
        { icon: <Users className="h-8 w-8" />, title: "IT Staffing", description: "Top-tier talent acquisition.", color: "from-pink-500 to-pink-600" },
        { icon: <Globe className="h-8 w-8" />, title: "Global Consulting", description: "Digital transformation.", color: "from-cyan-500 to-cyan-600" }
    ];

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">End-to-end technology services designed to scale your business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                            <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl w-fit mb-6 shadow-lg`}>
                                <div className="text-white">{service.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;