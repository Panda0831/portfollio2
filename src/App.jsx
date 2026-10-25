import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicProgression from './components/AcademicProgression';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  // Astuce dev : ?instant saute le loader (inactif en production)
  const [isLoading, setIsLoading] = useState(
    () => !(import.meta.env.DEV && new URLSearchParams(window.location.search).has('instant'))
  );

  useEffect(() => {
    // Ensure premium rich light theme is set
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div className="portfolio-app">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="app-main-wrapper"
          >
            {/* Top Scroll Indicator */}
            <ScrollProgress />

            {/* Subtle Editorial Background Grid (No generic particles) */}
            <BackgroundGrid />

            {/* Precision Custom Cursor */}
            <Cursor />

            {/* Header Navigation */}
            <Navbar />

            {/* Main Content Flow */}
            <main>
              {/* 1. Hero Section */}
              <Hero />

              {/* 2. About / Profile Section */}
              <About />

              {/* 3. Academic Progression (12.45 -> 15.49 Major de Promotion) */}
              <AcademicProgression />

              {/* 4. Projects (Blockchain Registry, School Management, IT Asset Management) */}
              <Projects />

              {/* 5. Skills (Languages, Backend, Frontend & Mobile, Data Engineering, Tools) */}
              <Skills />

              {/* 6. Achievements & Hackathons */}
              <Achievements />

              {/* 7. Contact & Internship Availability */}
              <Contact />
            </main>

            {/* Editorial Footer */}
            <Footer />

            {/* Floating Back to Top */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
