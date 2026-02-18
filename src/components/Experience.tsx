import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Computer Application',
      organization: 'Silver Oak University',
      period: '2023 - 2026',
      description: 'Specializing in advanced software engineering, cloud architecture, and full-stack development methodologies.',
      tags: ['Software Engineering', 'Cloud Computing', 'Data Structures'],
      icon: <GraduationCap className="text-white" size={20} />,
      color: 'from-dark-900 to-dark-700',
      glow: 'shadow-sm'
    },
    {
      id: 2,
      type: 'education',
      title: 'Higher Secondary (Commerce)',
      organization: 'Shree NV Patel Vidhyamandir',
      period: '2021 - 2023',
      description: 'Built a strong analytical foundation with focus on economics, business statistics, and organizational management.',
      tags: ['Business Economics', 'Statistics', 'Management'],
      icon: <Award className="text-white" size={20} />,
      color: 'from-dark-700 to-dark-500',
      glow: 'shadow-sm'
    },
    {
      id: 3,
      type: 'education',
      title: 'Secondary Education',
      organization: 'Lions Club School',
      period: '2011 - 2021',
      description: 'Cultivated leadership skills and academic excellence through various extracurricular achievements.',
      tags: ['Leadership', 'Academic Excellence', 'Teamwork'],
      icon: <Briefcase className="text-white" size={20} />,
      color: 'from-dark-600 to-dark-400',
      glow: 'shadow-sm'
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-light-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-dark-900">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-dark-600">Milestones</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg leading-relaxed">
            The educational foundation that powers my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px md:-ml-[0.5px] bg-dark-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Timeline Center Node */}
                <div className="absolute left-[20px] md:left-1/2 -ml-[12px] md:-ml-3 w-6 h-6 rounded-full bg-white border-4 border-dark-900 z-20 shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-dark-900 rounded-full"></div>
                </div>

                {/* Content Card Wrapper */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-16 md:pl-0 md:pr-16' : 'pl-16 md:pl-16'}`}>
                  <div className={`bg-white p-8 rounded-2xl border border-dark-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${exp.glow}`}>

                    {/* Accent Bar */}
                    <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.color}`}></div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-md`}>
                        {exp.icon}
                      </div>
                      <span className="text-sm font-mono text-dark-600 bg-dark-50 px-3 py-1 rounded-full border border-dark-100">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-dark-900 mb-2 font-display">{exp.title}</h3>
                    <p className="text-primary font-medium mb-4">{exp.organization}</p>
                    <p className="text-dark-500 text-sm mb-6 leading-relaxed border-l-2 border-dark-100 pl-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-light-50 text-dark-600 border border-dark-100 group-hover:border-dark-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Experience;