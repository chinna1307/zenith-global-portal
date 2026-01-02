import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            // Note: This API link stays the same (it connects to your Render backend)
            const response = await fetch('https://zenith-global-portal.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else { setStatus("error"); }
        } catch (error) { setStatus("error"); }
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Build The Future</h2>
                        <p className="text-xl text-gray-600 mb-12">Ready to transform your business? Reach out to Zenith Global Private Limited today.</p>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4"><div className="bg-blue-100 p-4 rounded-full"><Mail className="h-6 w-6 text-blue-600" /></div><div><h4 className="font-bold text-gray-900">Email Us</h4><p className="text-gray-600">contact@zenithglobalprivatelimited.com</p></div></div>
                            <div className="flex items-center gap-4"><div className="bg-teal-100 p-4 rounded-full"><Phone className="h-6 w-6 text-teal-600" /></div><div><h4 className="font-bold text-gray-900">Call Us</h4><p className="text-gray-600">+1 (555) 123-4567</p></div></div>
                        </div>
                    </div>
                    <div className="bg-gray-5 rounded-3xl p-8 shadow-inner border border-gray-100">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-gray-600 mt-2">We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="John Doe" />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="john@example.com" />
                                </div>
                                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Your Company Ltd" />
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="How can we help you?"></textarea>
                                <button type="submit" disabled={status === "loading"} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
                                    {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Send className="h-5 w-5" /> Send Message</>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;