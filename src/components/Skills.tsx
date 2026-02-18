import { Database, Layout, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: <Layout className="w-8 h-8 text-black" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
      color: "border-dark-100 hover:border-black",
      glow: "hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-8 h-8 text-black" />,
      skills: ["Node.js", "Express", "Python", "GraphQL", "Socket.io", "Microservices"],
      color: "border-dark-100 hover:border-black",
      glow: "hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8 text-black" />,
      skills: ["MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Firebase"],
      color: "border-dark-100 hover:border-black",
      glow: "hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="w-8 h-8 text-black" />,
      skills: ["Git", "CI/CD", "Linux", "Nginx", "Jest", "Vite"],
      color: "border-dark-100 hover:border-black",
      glow: "hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-light-50 overflow-hidden">
      {/* Background Matrix Effect (Subtle Dots) */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title text-dark-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-dark-500">Arsenal</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive toolkit that empowers me to build scalable, high-performance applications from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-white border transition-all duration-500 group ${category.color} ${category.glow}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-light-100 border border-dark-100 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-900 font-display">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-light-50 border border-dark-100 text-dark-700 font-medium hover:text-white hover:bg-dark-900 hover:border-dark-900 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;