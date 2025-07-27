import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications serving 100K+ users. Architecting microservices and implementing DevOps best practices.',
      achievements: [
        'Improved application performance by 40% through optimization and caching strategies',
        'Led a cross-functional team of 8 developers across multiple high-impact projects',
        'Implemented automated testing pipeline reducing production bugs by 65%',
        'Mentored 5 junior developers and established coding standards'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'InnovateTech Startup',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Built scalable web applications from concept to deployment. Collaborated with product and design teams to deliver user-centric solutions.',
      achievements: [
        'Developed 5 major features that increased user engagement by 35%',
        'Integrated 15+ third-party APIs and payment processing systems',
        'Optimized database queries improving response times by 50%',
        'Established CI/CD pipeline reducing deployment time by 80%'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      location: 'New York, NY',
      period: '2018 - 2020',
      description: 'Created responsive web applications and collaborated with UX/UI designers to deliver pixel-perfect interfaces for diverse clients.',
      achievements: [
        'Delivered 25+ client projects with 98% satisfaction rate',
        'Implemented responsive designs reducing mobile bounce rate by 30%',
        'Optimized web performance achieving 95+ Lighthouse scores',
        'Established component library used across 10+ projects'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Comprehensive computer science education with focus on software engineering, algorithms, and system design.',
      achievements: [
        'Graduated Magna Cum Laude with GPA: 3.8/4.0',
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Society (2017-2018)',
        'Published research paper on machine learning algorithms'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      type: 'certification',
      degree: 'AWS Certified Solutions Architect',
      school: 'Amazon Web Services',
      location: 'Online',
      period: '2021',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      achievements: [
        'Scored 890/1000 on certification exam',
        'Specialized in serverless architecture and microservices',
        'Completed advanced cloud security training',
        'Active member of AWS Community Builders program'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0]);
    const yearB = parseInt(b.period.split(' - ')[0]);
    return yearB - yearA;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6" />;
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      case 'certification':
        return <Award className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              <TrendingUp size={16} className="mr-2" />
              Career Journey
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Experience &
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A journey of continuous learning, growth, and delivering impactful solutions 
              across diverse technologies and industries.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full"></div>

            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform z-10`}>
                  </div>

                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className={`bg-gradient-to-br ${item.color} p-[1px] rounded-2xl group-hover:scale-105 transition-all duration-300`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {item.type === 'work' ? item.title : item.degree}
                            </h3>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                              {item.type === 'work' ? item.company : item.school}
                            </p>
                            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span className="text-sm font-medium">{item.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={16} />
                                <span className="text-sm font-medium">{item.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} text-white`}>
                            {getIcon(item.type)}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Gained */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Skills Developed Throughout Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Advanced proficiency in modern web technologies, cloud platforms, and development methodologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Leadership</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Team leadership, mentoring, project management, and cross-functional collaboration.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Complex system design, performance optimization, and innovative solution development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;