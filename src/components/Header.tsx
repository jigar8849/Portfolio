import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <nav
          className={`rounded-full transition-all duration-500 ${isScrolled
            ? 'glass shadow-lg px-6 py-3 w-full max-w-5xl'
            : 'bg-transparent px-0 py-0 w-full'
            } flex items-center justify-between relative`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <div className={`relative w-8 h-8 flex items-center justify-center rounded-lg border overflow-hidden transition-colors ${isScrolled ? 'bg-dark-900 border-dark-900 text-white' : 'bg-white/10 border-white/20 text-dark-900'}`}>
              <span className="font-display font-bold group-hover:text-primary transition-colors">JP</span>
            </div>
            <span className={`font-display font-bold text-lg tracking-tight transition-opacity duration-300 ${isScrolled ? 'opacity-100 text-dark-900' : 'opacity-0 md:opacity-100 text-dark-900'}`}>
              Jigar<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className={`flex items-center gap-1 rounded-full p-1 border backdrop-blur-sm ${isScrolled ? 'bg-white/50 border-dark-100' : 'bg-white/30 border-white/20'}`}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${activeSection === link.href.substring(1)
                      ? 'text-white bg-dark-900 shadow-lg'
                      : 'text-dark-700 hover:text-dark-900 hover:bg-white/50'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className={`flex items-center gap-3 pl-4 border-l ${isScrolled ? 'border-dark-200' : 'border-dark-200/50'}`}>
              <a
                href="https://github.com/jigar8849"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-600 hover:text-dark-900 hover:bg-dark-100 rounded-lg transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-600 hover:text-[#0077b5] hover:bg-dark-100 rounded-lg transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-800 hover:text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-4 md:hidden">
            <div className="glass-card p-6 flex flex-col space-y-4 animate-fade-in border border-dark-100 bg-white/95 backdrop-blur-2xl shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-3 rounded-xl text-lg font-medium text-dark-700 hover:text-dark-900 hover:bg-dark-50 transition-all flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                </a>
              ))}
              <div className="h-px bg-dark-100 my-2"></div>
              <div className="flex gap-4 justify-center pt-2">
                <a href="https://github.com/jigar8849" className="p-3 bg-dark-50 rounded-xl text-dark-600 hover:text-dark-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/" className="p-3 bg-dark-50 rounded-xl text-dark-600 hover:text-[#0077b5] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:jigarprajapati6457@gmail.com" className="p-3 bg-dark-50 rounded-xl text-dark-600 hover:text-red-500 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;