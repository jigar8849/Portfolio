import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">
      {/* Background Gradients (Subtle) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-dark-100/50 rounded-full blur-[100px] animate-pulse-slow mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-[100px] animate-pulse-slow delay-700 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-dark-900">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-dark-600">Connect</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or just want to discuss the latest tech? I'm always open to new opportunities and conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 h-full flex flex-col justify-between relative overflow-hidden group bg-white border border-dark-100 shadow-xl">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-dark-50 rounded-full blur-[40px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-dark-100"></div>

              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-8 font-display">Contact Details</h3>

                <div className="space-y-8">
                  <a href="mailto:jigarprajapati6457@gmail.com" className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-light-50 rounded-xl text-dark-900 border border-dark-100 group-hover/item:border-dark-300 transition-colors shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-dark-500 mb-1">Email</h4>
                      <span className="text-dark-800 break-all group-hover/item:text-black transition-colors font-medium">jigarprajapati6457@gmail.com</span>
                    </div>
                  </a>

                  <a href="tel:+918849602896" className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-light-50 rounded-xl text-dark-900 border border-dark-100 group-hover/item:border-dark-300 transition-colors shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-dark-500 mb-1">Phone</h4>
                      <span className="text-dark-800 group-hover/item:text-black transition-colors font-medium">+91 8849602896</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 bg-light-50 rounded-xl text-dark-900 border border-dark-100 group-hover/item:border-dark-300 transition-colors shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-dark-500 mb-1">Location</h4>
                      <span className="text-dark-800 font-medium">Ahmedabad, Gujarat, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-medium text-dark-500 mb-4">Connect on Socials</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/jigar8849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-light-50 rounded-xl text-dark-700 border border-dark-100 hover:bg-dark-900 hover:text-white hover:border-dark-900 transition-all hover:-translate-y-1 shadow-sm"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-light-50 rounded-xl text-dark-700 border border-dark-100 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:-translate-y-1 transition-all shadow-sm"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/Jigar4898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-light-50 rounded-xl text-dark-700 border border-dark-100 hover:bg-black hover:text-white hover:border-black hover:-translate-y-1 transition-all shadow-sm"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 h-full relative overflow-hidden bg-white border border-dark-100 shadow-xl">

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-dark-700 ml-1">Name</label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-light-50 border border-dark-200 rounded-xl px-5 py-4 text-dark-900 focus:outline-none focus:border-dark-900 focus:bg-white transition-all placeholder:text-dark-400 shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-dark-700 ml-1">Email</label>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-light-50 border border-dark-200 rounded-xl px-5 py-4 text-dark-900 focus:outline-none focus:border-dark-900 focus:bg-white transition-all placeholder:text-dark-400 shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-dark-700 ml-1">Message</label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-light-50 border border-dark-200 rounded-xl px-5 py-4 text-dark-900 focus:outline-none focus:border-dark-900 focus:bg-white transition-all placeholder:text-dark-400 resize-none shadow-sm"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-display text-lg tracking-wide">
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-center font-medium animate-fade-in flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Message Sent Successfully
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;