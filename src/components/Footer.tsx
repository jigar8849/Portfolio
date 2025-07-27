import React from 'react';
import { Heart, Github, Linkedin, Twitter, Code, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/jigar8849',
      name: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/',
      name: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Twitter size={24} />,
      href: 'https://x.com/Jigar4898',
      name: 'Twitter',
      color: 'hover:bg-blue-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Jigar Prajapati</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  Full Stack Developer passionate about creating exceptional digital experiences 
                  with modern technologies and innovative solutions.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-800 text-gray-400 p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:text-white`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 block"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact</h4>
                <div className="space-y-3 text-gray-400">
                  <p className="hover:text-white transition-colors">
                    jigarprajapati6457@gmail.com
                  </p>
                  <p className="hover:text-white transition-colors">
                    +91 8849602896
                  </p>
                  <p className="hover:text-white transition-colors">
                    Ahmedabad , Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © {currentYear} Jigar Prajapati. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-400 text-sm flex items-center">
                    Built with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
                  </p>
                  <button
                    onClick={scrollToTop}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:scale-110 transition-transform"
                    title="Back to top"
                  >
                    <ArrowUp size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;