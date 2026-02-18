import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Sparkles, Code, Database, Smartphone, Globe, Cloud, Cpu, Layers } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Basic mouse position for spotlight
      setMousePos({ x: e.clientX, y: e.clientY });

      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();

      // Calculate 3D tilt offset (smoother divisor)
      const x = (e.clientX - left - width / 2) / 30;
      const y = (e.clientY - top - height / 2) / 30;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white selection:bg-black selection:text-white perspective-1000 group/hero">

      {/* 1. Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] z-0 pointer-events-none"></div>

      {/* 2. Interactive Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-80 mix-blend-multiply"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200,200,200,0.15), transparent 40%)`
        }}
      ></div>

      {/* 3. Floating 3D Background Elements (Parallax Layers) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">

        {/* Layer 1: Close/Fast */}
        <div className="absolute top-1/4 left-10 md:left-24 animate-float-slow opacity-20 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${offset.x * -2}px, ${offset.y * -2}px) rotateY(${offset.x * 2}deg)` }}>
          <div className="glass p-5 rounded-2xl rotate-12 bg-white/60 backdrop-blur-md shadow-2xl border border-dark-100/50 transform hover:scale-110 transition-transform">
            <Code className="w-12 h-12 text-dark-800" strokeWidth={1.5} />
          </div>
        </div>

        <div className="absolute bottom-1/3 right-12 md:right-32 animate-float-medium opacity-20 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${offset.x * 2.5}px, ${offset.y * 2.5}px) rotateX(${offset.y * -2}deg)` }}>
          <div className="glass p-5 rounded-2xl -rotate-12 bg-white/60 backdrop-blur-md shadow-2xl border border-dark-100/50 transform hover:scale-110 transition-transform">
            <Database className="w-12 h-12 text-dark-800" strokeWidth={1.5} />
          </div>
        </div>

        {/* Layer 2: Mid/Medium */}
        <div className="absolute top-1/3 right-1/4 animate-float-slow opacity-15 hidden lg:block transition-transform duration-100"
          style={{ transform: `translate(${offset.x * 1.2}px, ${offset.y * 1.2}px)` }}>
          <div className="glass p-3 rounded-xl rotate-6 bg-white/40 backdrop-blur-sm border border-dark-50">
            <Smartphone className="w-8 h-8 text-dark-600" strokeWidth={1.5} />
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 animate-float-fast opacity-15 hidden lg:block transition-transform duration-100"
          style={{ transform: `translate(${offset.x * -1}px, ${offset.y * -1}px)` }}>
          <div className="glass p-3 rounded-full bg-white/40 backdrop-blur-sm border border-dark-50">
            <Globe className="w-8 h-8 text-dark-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Layer 3: Far/Slow (Wireframes) */}
        <div className="absolute top-20 right-1/3 animate-float-medium opacity-5 hidden md:block transition-transform duration-300"
          style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}>
          <Cloud className="w-20 h-20 text-dark-400" strokeWidth={0.5} />
        </div>

        <div className="absolute bottom-10 left-1/3 animate-float-slow opacity-5 hidden md:block transition-transform duration-300"
          style={{ transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)` }}>
          <Cpu className="w-24 h-24 text-dark-400" strokeWidth={0.5} />
        </div>

        <div className="absolute top-1/2 left-10 animate-float-fast opacity-5 hidden xl:block transition-transform duration-300"
          style={{ transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)` }}>
          <Layers className="w-16 h-16 text-dark-400" strokeWidth={0.5} />
        </div>
      </div>


      {/* 4. Main Content with Enhanced 3D Tilt */}
      <div
        ref={containerRef}
        className="container mx-auto px-4 relative z-10 perspective-1000"
      >
        <div
          className="max-w-5xl mx-auto text-center transform-style-3d transition-transform duration-100 ease-out"
          style={{ transform: `rotateX(${-offset.y}deg) rotateY(${offset.x}deg)` }}
        >

          {/* 3D Floating Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-dark-200/60 bg-white/90 backdrop-blur-xl shadow-lg mb-10 animate-fade-in hover:border-black/50 transition-all duration-300 transform hover:scale-105 cursor-default relative overflow-hidden group backface-hidden"
            style={{ transform: 'translateZ(60px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse relative z-10"></span>
            <span className="text-sm font-semibold text-dark-700 tracking-wide uppercase text-[11px] relative z-10">Available for Freelance</span>
          </div>

          {/* Main Title - Layered Parallax Text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-dark-900 mb-8 leading-[0.9] tracking-tighter transform-style-3d select-none">
            <span
              className="block animate-slide-up hover:text-outline-dark transition-all duration-500 cursor-default relative"
              style={{ animationDelay: '0.1s', transform: 'translateZ(80px)' }}
            >
              Crafting
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-br from-dark-900 via-dark-700 to-black animate-gradient-x animate-slide-up pb-4 transform transition-all duration-500 hover:scale-[1.02] cursor-default relative"
              style={{ animationDelay: '0.2s', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))', transform: 'translateZ(120px)' }}
            >
              <span className="absolute inset-0 blur-3xl bg-dark-900/5 -z-10 animate-pulse-slow pointer-events-none"></span>
              Digital Luxury
            </span>
          </h1>

          {/* Subtitle - Depth Layer */}
          <p
            className="text-xl md:text-2xl text-dark-500 max-w-2xl mx-auto mb-16 leading-relaxed animate-slide-up font-light tracking-wide"
            style={{ animationDelay: '0.3s', transform: 'translateZ(50px)' }}
          >
            Hi, I'm <span className="text-black font-semibold relative inline-block group cursor-pointer border-b-2 border-transparent hover:border-black transition-all duration-300">
              Jigar Prajapati
            </span>. A Full Stack Architect building the future of web with <span className="font-medium text-dark-900">React</span>, <span className="font-medium text-dark-900">Node.js</span>, and cloud technologies.
          </p>

          {/* Buttons - Magnetic & 3D */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up transform-style-3d"
            style={{ animationDelay: '0.4s', transform: 'translateZ(70px)' }}
          >
            <a href="#projects" className="btn-primary group relative overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-3">
                Explore Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </a>

            <a href="#contact" className="btn-outline group relative overflow-hidden bg-white/40 backdrop-blur-sm border-dark-200 hover:border-dark-900 hover:bg-white/60 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Let's Talk
                <Sparkles className="w-5 h-5 text-yellow-500 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Floating in Foreground */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-3 text-dark-400 hover:text-black transition-colors cursor-pointer group z-30 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold group-hover:tracking-[0.5em] transition-all duration-500">Scroll Down</span>
        <div className="p-2 border border-dark-300/50 rounded-full group-hover:border-dark-900 transition-colors">
          <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
