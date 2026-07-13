import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Particles from './components/Particles'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Scroll Progress */}
            <ScrollProgress />
            
            {/* Background Elements */}
            <div className="grid-overlay" />
            <div className="glow-ambient" />
            <div className="glow-ambient-2" />
            
            {/* Particles */}
            <Particles />
            
            {/* Custom Cursor */}
            <Cursor />
            
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Scroll to Top */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
