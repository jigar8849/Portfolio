import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Download,
} from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <Code size={16} className="mr-2" />
                Available for new opportunities
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Jigar</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Prajapati
                </span>
              </h1>

              <div className="text-xl lg:text-2xl text-gray-300 mb-4 font-medium">
                Full Stack Developer
              </div>

              <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                Crafting scalable web applications with cutting-edge
                technologies. Specialized in React, Node.js, and cloud
                architecture.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
                >
                  <span>View My Work</span>
                  <ChevronDown
                    size={20}
                    className="ml-2 group-hover:translate-y-1 transition-transform"
                  />
                </button>
                <a
                  href="/Jigar_Resume.pdf"
                  download
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a
                  href="https://github.com/jigar8849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="jigarprajapati6457@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Content - Code Preview */}
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">
                    portfolio.tsx
                  </span>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-purple-400">
                    const <span className="text-blue-400">developer</span> ={" "}
                    {`{`}
                  </div>
                  <div className="ml-4 text-gray-300">
                    name:{" "}
                    <span className="text-green-400">'Jigar Prajapati'</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    role:{" "}
                    <span className="text-green-400">
                      'Full Stack Developer'
                    </span>
                    ,
                  </div>
                  <div className="ml-4 text-gray-300">skills: [</div>
                  <div className="ml-8 text-green-400">
                    'React', 'Node.js', 'Express.js',
                  </div>
                  <div className="ml-8 text-green-400">
                    'MongoDB', 'GitHub', 'Vercel'
                  </div>
                  <div className="ml-4 text-gray-300">],</div>
                  <div className="ml-4 text-gray-300">
                    passion:{" "}
                    <span className="text-green-400">
                      'Building amazing apps'
                    </span>
                  </div>
                  <div className="text-purple-400">{`}`}</div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-500/30 animate-bounce">
                <span className="text-blue-400 font-bold">JS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-green-500/30 animate-bounce delay-300">
                <span className="text-green-400 font-bold">⚛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
