import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicProgression from './components/AcademicProgression';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="portfolio-app">
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.28, 0.11, 0.32, 1] }}
          className="app-main-wrapper"
        >
          <ScrollProgress />
          <Navbar />

          <main>
            <Hero />
            <About />
            <AcademicProgression />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
