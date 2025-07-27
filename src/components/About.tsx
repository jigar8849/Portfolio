import React from 'react';
import { Code, Database, Server, Smartphone, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Architecture',
      description: 'Building responsive, performant UIs with React, TypeScript, and modern CSS frameworks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Engineering',
      description: 'Designing scalable APIs and microservices with Node.js, Express, and cloud technologies',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Optimizing data structures with MongoDB, PostgreSQL, and Redis for high performance',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps & Deployment',
      description: 'Implementing CI/CD pipelines, containerization, and cloud infrastructure automation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies Mastered' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <Zap size={16} className="mr-2" />
              About Me
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate About
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a Full Stack Developer who transforms complex problems into elegant, scalable solutions. 
              With a deep understanding of modern web technologies, I create applications that deliver 
              exceptional user experiences and robust performance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey in Tech
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My passion for development began with curiosity about how digital experiences come to life. 
                Today, I specialize in creating full-stack applications that seamlessly blend cutting-edge 
                frontend interfaces with robust backend architectures.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I thrive on staying ahead of technology trends, constantly learning new frameworks and 
                methodologies to deliver solutions that not only meet current needs but are built to 
                scale for the future.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${highlight.color} text-white group-hover:scale-110 transition-transform`}>
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;