import React, { useState } from 'react';
import { ExternalLink, Github, Laptop, ShoppingCart, MessageSquare, Calendar, Users, BarChart3, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Enterprise-grade e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      category: 'Full Stack',
      github: 'https://github.com/jigarprajapati/ecommerce-platform',
      demo: 'https://ecommerce-demo.jigarprajapati.dev',
      icon: <ShoppingCart size={24} />,
      featured: true
    },
    {
      title: 'Project Management Suite',
      description: 'Comprehensive project management tool with real-time collaboration, advanced reporting, and team productivity analytics.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Docker'],
      category: 'Full Stack',
      github: 'https://github.com/jigarprajapati/project-management',
      demo: 'https://pm-demo.jigarprajapati.dev',
      icon: <Calendar size={24} />,
      featured: true
    },
    {
      title: 'Real-time Chat Platform',
      description: 'Scalable messaging platform with end-to-end encryption, file sharing, video calls, and advanced moderation tools.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      category: 'Full Stack',
      github: 'https://github.com/jigarprajapati/chat-platform',
      demo: 'https://chat-demo.jigarprajapati.dev',
      icon: <MessageSquare size={24} />,
      featured: false
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization platform with real-time metrics, custom reports, and machine learning insights.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
      category: 'Frontend',
      github: 'https://github.com/jigarprajapati/analytics-dashboard',
      demo: 'https://analytics-demo.jigarprajapati.dev',
      icon: <BarChart3 size={24} />,
      featured: false
    },
    {
      title: 'Team Collaboration Hub',
      description: 'Enterprise collaboration platform with integrated video conferencing, document sharing, and workflow automation.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Kubernetes'],
      category: 'Full Stack',
      github: 'https://github.com/jigarprajapati/collaboration-hub',
      demo: 'https://collab-demo.jigarprajapati.dev',
      icon: <Users size={24} />,
      featured: false
    },
    {
      title: 'Developer Portfolio',
      description: 'Modern, responsive portfolio website with advanced animations, dark mode, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com/jigarprajapati/portfolio',
      demo: 'https://jigarprajapati.dev',
      icon: <Laptop size={24} />,
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
              <Laptop size={16} className="mr-2" />
              Featured Work
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Projects That
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Make Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my recent work showcasing expertise in modern web development, 
              from concept to deployment.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl text-gray-700 dark:text-gray-300">
                      {project.icon}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg text-gray-700 dark:text-gray-300">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;