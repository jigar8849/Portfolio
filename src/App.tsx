import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSectionTracking } from './hooks/useSectionTracking';

function App() {
  useSectionTracking(); // Initialize GA section tracking

  return (
    <div className="min-h-screen bg-light-50 text-dark-800 font-sans selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;