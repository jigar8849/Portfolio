import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import sms from '../assets/images/sms.jpeg';
import airBNB from '../assets/images/airBNB.jpeg';
import nordicLegal from '../assets/images/nordicLegal.png';
import portfolio from '../assets/images/portfolio.png';
import apple from '../assets/images/apple.png';
import quickcheckin from '../assets/images/quickcheckin.png';

const Projects = () => {
  // Removed unused state variable activeProject for cleaner code


  const projects = [
    {
      title: 'Society Management System',
      category: 'Full Stack Web App',
      description: 'A comprehensive platform specialized for managing residential societies, handling billing, complaints, and member data with ease.',
      image: sms,
      tech: ['Node.js', 'Express', 'MongoDB'],
      links: {
        demo: 'https://next-sms-frontend-6mwm.vercel.app/',
        code: 'https://github.com/jigar8849/SMS'
      },
      year: '2025'
    },
    {
      title: 'QuickCheckin',
      category: 'SaaS / Restaurant Management',
      description: 'A modern digital waitlist and reservation system designed to help restaurants manage bookings, reduce wait times, and improve customer experience.',
      image: quickcheckin,
      tech: ['React', 'Node.js', 'MongoDB'],
      links: {
        demo: 'https://www.quickcheckin.ca/',
        code: ''
      },
      year: '2025'
    },
    {
      title: 'Nordic Legal Consulting',
      category: 'Business Website / Legal Services',
      description: 'A bilingual legal consulting website offering guidance on family reunification, EU law, visas, and residence permits across Denmark, Sweden, and Germany, with integrated consultation requests and AI-assisted support.',
      image: nordicLegal,
      tech: ['React.js', 'Formspree', 'Gemini AI'],
      links: {
        demo: 'https://nordiclegalconsulting.dk/',
        code: ''
      },
      year: '2025'
    },
    {
      title: 'AirBNB Clone',
      category: 'Web Application',
      description: 'A full-featured booking platform allowing users to book stays, manage listings, and handle reservations with secure authentication.',
      image: airBNB,
      tech: ['Node.js', 'MongoDB', 'React'],
      links: {
        demo: 'https://airbnb-xgtg.onrender.com/listings',
        code: 'https://github.com/jigar8849/AirBNB'
      },
      year: '2024'
    },
    {
      title: 'Personal Portfolio',
      category: 'Brand Identity',
      description: 'A modern, high-performance portfolio website showcasing skills and projects, built with a unique monochrome luxury theme.',
      image: portfolio,
      tech: ['React', 'Tailwind', 'Vite'],
      links: {
        demo: 'jigarprajapati.me',
        code: 'https://github.com/jigar8849/Portfolio'
      },
      year: '2024'
    },



    {
      title: 'AirPods Landing Page',
      category: 'UI/UX Replica',
      description: 'A pixel-perfect replica of the Apple AirPods product page, focusing on precise layout, typography, and responsive design.',
      image: apple,
      tech: ['HTML', 'CSS', 'JS'],
      links: {
        demo: 'https://jigar-airpods.netlify.app/',
        code: 'https://github.com/jigar8849/AirPods'
      },
      year: '2023'
    },

  ];

  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-100 pb-8">
          <div>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2 block">Selected Work</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-dark-900 tracking-tight">
              Featured <br /> Projects
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm mt-6 md:mt-0 text-right md:text-left">
            A collection of digital products crafted with precision, focusing on user experience and robust architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Overlay Links */}
                <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-dark-900 hover:text-blue-600 shadow-lg hover:scale-110 transition-transform" aria-label="Live Demo">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-dark-900 hover:text-black shadow-lg hover:scale-110 transition-transform" aria-label="View Code">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-dark-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium border border-gray-100 rounded-md text-gray-500 bg-gray-50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://github.com/jigar8849" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-dark-900 text-white rounded-full font-medium hover:bg-black transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
            View All Projects on GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;