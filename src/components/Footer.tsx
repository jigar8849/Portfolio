import { Github, Linkedin, Twitter, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/jigar8849',
      label: 'GitHub',
      color: 'hover:text-black'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/jigarkumar-prajapati-a6a7b9237/',
      label: 'LinkedIn',
      color: 'hover:text-[#0077b5]'
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://x.com/Jigar4898',
      label: 'Twitter',
      color: 'hover:text-black'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:jigarprajapati6457@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-dark-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-dark-200 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <a
              href="#"
              onClick={scrollToTop}
              className="text-3xl font-bold font-display tracking-tight text-dark-900 inline-block"
            >
              JP<span className="text-primary">.</span>
            </a>
            <p className="text-dark-500 max-w-sm leading-relaxed">
              Crafting digital experiences where design meets functionality. Focused on building scalable, performant, and beautiful web applications.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-3 bg-light-50 rounded-xl text-dark-500 border border-dark-100 ${link.color} hover:bg-dark-50 hover:border-dark-300 transition-all duration-300 hover:-translate-y-1`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 font-display">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-500 hover:text-dark-900 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-200 group-hover:bg-dark-900 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-dark-900 font-bold mb-6 font-display">System Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-dark-600 p-3 bg-light-50 rounded-xl border border-dark-100 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-medium">Open to Work</span>
              </div>
              <div className="text-sm text-dark-500 pl-1">
                <p>Ahmedabad, Gujarat</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-dark-400 text-sm font-medium">
            © {currentYear} Jigar Prajapati. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group relative px-6 py-3 bg-white rounded-full border border-dark-200 hover:border-dark-900 hover:bg-dark-50 transition-all shadow-sm"
          >
            <span className="flex items-center gap-2 text-sm text-dark-600 group-hover:text-dark-900 transition-colors font-medium">
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;