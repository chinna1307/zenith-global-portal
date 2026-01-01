import React from 'react';
import { Globe, Server, Database, Brain, Sparkles, Smartphone, Shield } from 'lucide-react';

const Technologies = () => {
    const techCategories = [
        {
            title: "Frontend",
            icon: <Globe className="h-6 w-6 text-white" />,
            color: "bg-blue-500",
            tags: ["React", "Next.js", "TypeScript", "Vue.js", "Angular", "Tailwind CSS"]
        },
        {
            title: "Backend",
            icon: <Server className="h-6 w-6 text-white" />,
            color: "bg-green-500",
            tags: ["Node.js", "Python", "Java", "C#", "Go", "Rust"]
        },
        {
            title: "Database",
            icon: <Database className="h-6 w-6 text-white" />,
            color: "bg-purple-500",
            tags: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL", "Supabase"]
        },
        {
            title: "AI/ML",
            icon: <Brain className="h-6 w-6 text-white" />,
            color: "bg-orange-500",
            tags: ["TensorFlow", "PyTorch", "OpenAI", "Langchain", "Hugging Face", "Scikit-learn"]
        },
        {
            title: "Vibe Coding",
            icon: <Sparkles className="h-6 w-6 text-white" />,
            color: "bg-indigo-500",
            tags: ["Advanced Patterns", "Code Quality", "Best Practices", "Team Collaboration", "Productivity Tools", "Modern Workflows"]
        },
        {
            title: "Mobile",
            icon: <Smartphone className="h-6 w-6 text-white" />,
            color: "bg-pink-500",
            tags: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Expo"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Shield className="h-6 w-6 text-white" />,
            color: "bg-slate-700",
            tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        }
    ];

    return (
        <section id="technologies" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technologies</h2>
                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">We use the latest modern tools to build scalable solutions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((cat, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`${cat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Technologies;