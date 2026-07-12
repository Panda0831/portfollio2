import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Download } from 'lucide-react';

export default function Hero() {
  const title = "DEVELOPPEUR CREATIF";
  
  // Variants for letters reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const letterVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      window.scrollTo({
        top: projectsSec.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1 pulse-glow" />
      <div className="hero-glow-2 pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="hero-content">
        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-tagline"
        >
          <span className="hero-badge">
            <Cpu size={14} className="badge-icon" /> Portfolio Actif
          </span>
          <span className="hero-location">Basé à Lyon, France</span>
        </motion.div>

        {/* Main Title (Motion Design Split Text) */}
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-title"
        >
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="hero-word">
              {word.split("").map((letter, letterIndex) => (
                <motion.span 
                  key={letterIndex} 
                  variants={letterVariants}
                  className="hero-letter"
                >
                  {letter}
                </motion.span>
              ))}
              &nbsp;
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-subtitle"
        >
          Je conçois des applications web performantes avec des interfaces animées interactives et des expériences 3D mémorables.
        </motion.p>

        {/* Code Console / Dashboard Preview (Motion Design) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="terminal-preview glass-panel"
        >
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title">developer_profile.js</span>
          </div>
          <div className="terminal-body">
            <pre>
              <code>
                <span className="code-keyword">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="code-string">'Denver'</span>,<br />
                &nbsp;&nbsp;role: <span className="code-string">'Creative Frontend Developer'</span>,<br />
                &nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Three.js'</span>, <span className="code-string">'Framer Motion'</span>, <span className="code-string">'CSS3/SCSS'</span>],<br />
                &nbsp;&nbsp;philosophy: <span className="code-string">'Chaque pixel doit avoir une âme.'</span><br />
                &#125;;<br /><br />
                <span className="code-keyword">function</span> <span className="code-func">renderMagic</span>() &#123;<br />
                &nbsp;&nbsp;console.log(<span className="code-string">`Generating immersive experiences...`</span>);<br />
                &#125;
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hero-actions"
        >
          <a 
            href="#projects" 
            onClick={handleScrollToProjects}
            className="btn btn-primary interactive"
          >
            Voir les Projets <ArrowDown size={18} />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-secondary interactive"
          >
            Me Contacter
          </a>
          <a 
            href="/cv.pdf" 
            download
            className="btn btn-secondary interactive"
          >
            Télécharger CV <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="scroll-indicator"
        onClick={handleScrollToProjects}
      >
        <span className="scroll-indicator-text">Faites défiler</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="scroll-indicator-mouse"
        >
          <div className="scroll-indicator-wheel" />
        </motion.div>
      </motion.div>
    </section>
  );
}
