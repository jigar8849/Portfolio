import React from 'react';
import { Code, Server, Database, Wrench, Globe, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={28} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 92, icon: '🔷' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'Bootstrap CSS', level: 80, icon: '🎨' },
        { name: 'CSS', level: 95, icon: '🎨' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={28} />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: [
        { name: 'Node.js', level: 93, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚀' },
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'API', level: 82, icon: '📊' },
        { name: 'REST APIs', level: 95, icon: '🔗' },
      ]
    },
    {
      title: 'Database & Storage',
      icon: <Database size={28} />,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      skills: [
        { name: 'MongoDB', level: 90, icon: '🍃' },
        { name: 'MySQL', level: 80, icon: '🐬' },
        
      ]
    },
    // {
    //   title: 'DevOps & Cloud',
    //   icon: <Globe size={28} />,
    //   color: 'from-orange-500 to-red-500',
    //   bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    //   borderColor: 'border-orange-200 dark:border-orange-800',
    //   skills: [
    //     { name: 'Docker', level: 88, icon: '🐳' },
    //     { name: 'AWS', level: 85, icon: '☁️' },
    //     { name: 'Kubernetes', level: 75, icon: '⚙️' },
    //     { name: 'CI/CD', level: 82, icon: '🔄' },
    //     { name: 'Nginx', level: 80, icon: '🌐' },
    //     { name: 'Linux', level: 85, icon: '🐧' }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 text-sm font-medium mb-4">
              <Zap size={16} className="mr-2" />
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Skills &
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the modern technology stack, from frontend frameworks 
              to cloud infrastructure and everything in between.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group`}
              >
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl text-white mr-6 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-gray-800 dark:text-gray-200 font-semibold">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            {skill.level}%
                          </span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                          style={{ 
                            width: `${skill.level}%`,
                            transform: 'translateX(-100%)',
                            animation: 'slideIn 1s ease-out forwards'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'GitHub Actions', 'Vite', 'Vercel', 'Netlify',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;