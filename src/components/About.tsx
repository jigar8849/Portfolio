import { Code, Database, Server, Zap, Globe, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-light-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-100 blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-slate-200 blur-[120px] -z-10 opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Narrative */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-left mb-6 text-dark-900">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-dark-500">Me</span>
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <div className="space-y-4 text-dark-600 leading-relaxed text-lg">
                <p>
                  I am a passionate developer based in India, driven by the challenge of creating digital experiences that are not only functional but also visually stunning.
                </p>
                <p>
                  My journey began with a curiosity for how the web works, which quickly evolved into a rigorous pursuit of mastering the <span className="text-dark-900 font-bold">MERN stack</span>. I believe in writing clean, maintainable code and designing interfaces that feel intuitive and alive.
                </p>
                <p>
                  Whether it's architecting a complex backend system or refining the micro-interactions of a frontend component, I bring a detail-oriented approach to every project.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Experience', value: '1+', suffix: 'Years' },
                { label: 'Projects', value: '10+', suffix: 'Completed' },
                { label: 'Clients', value: '5+', suffix: 'Happy' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center group hover:-translate-y-1 transition-transform duration-300 border border-dark-100 shadow-sm hover:shadow-xl hover:border-dark-900/10">
                  <h3 className="text-3xl font-bold text-dark-900 mb-1 group-hover:text-primary transition-colors font-display">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-dark-500 uppercase tracking-widest font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visuals & Skills */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-100 to-white rounded-3xl blur-2xl -z-10"></div>

            <div className="glass-card p-8 rounded-3xl border border-dark-100 relative overflow-hidden bg-white/80 backdrop-blur-xl shadow-2xl">
              {/* Decorative Grid */}
              <div className="absolute inset-0 bg-grid opacity-5"></div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Frontend', icon: <Code className="w-5 h-5" />, desc: 'React, Next.js, Tailwind', color: 'text-dark-900', bg: 'bg-dark-100' },
                  { title: 'Backend', icon: <Server className="w-5 h-5" />, desc: 'Node.js, Express, Python', color: 'text-dark-900', bg: 'bg-dark-100' },
                  { title: 'Database', icon: <Database className="w-5 h-5" />, desc: 'MongoDB, PostgreSQL', color: 'text-dark-900', bg: 'bg-dark-100' },
                  { title: 'Performance', icon: <Zap className="w-5 h-5" />, desc: 'Optimization, SEO', color: 'text-dark-900', bg: 'bg-dark-100' },
                  { title: 'Design', icon: <Globe className="w-5 h-5" />, desc: 'Figma, UI/UX Principles', color: 'text-dark-900', bg: 'bg-dark-100' },
                  { title: 'Architecture', icon: <Cpu className="w-5 h-5" />, desc: 'System Design, APIs', color: 'text-dark-900', bg: 'bg-dark-100' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-dark-100 hover:border-dark-300 transition-all duration-300 hover:shadow-md group">
                    <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:bg-dark-900 group-hover:text-white transition-colors`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-dark-900 mb-1 text-lg font-display">{item.title}</h4>
                    <p className="text-dark-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;