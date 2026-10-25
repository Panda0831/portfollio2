import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Profil', number: '01', href: '#about' },
  { label: 'Progression', number: '02', href: '#academic' },
  { label: 'Projets', number: '03', href: '#projects' },
  { label: 'Compétences', number: '04', href: '#skills' },
  { label: 'Distinctions', number: '05', href: '#achievements' },
  { label: 'Contact', number: '06', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['home', 'about', 'academic', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({
        top: top >= 0 ? top : 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar-header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        {/* Brand / Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="navbar-brand interactive"
        >
          <span className="brand-name">FANAMBY MANJAKA</span>
          <span className="brand-meta">L3 GENIE LOGICIEL · DATA</span>
        </a>

        

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.number}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link interactive ${isActive ? 'active' : ''}`}
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-label">{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbarActiveIndicator"
                    className="nav-active-line"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Direct Action Link */}
        <div className="navbar-cta-group">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="navbar-cta-btn interactive"
          >
            <span>Me Contacter</span>
            <ArrowUpRight size={14} className="cta-icon" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle-btn interactive"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-drawer"
          >
            <div className="mobile-drawer-inner">
              <div className="mobile-drawer-status">
                <span className="status-pulse-dot" />
                <span>Disponible pour stage de fin d'études dès le 30 Décembre 2026</span>
              </div>
              <div className="mobile-nav-links">
                {navItems.map((item) => (
                  <a
                    key={item.number}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`mobile-nav-link interactive ${
                      activeSection === item.href.replace('#', '') ? 'active' : ''
                    }`}
                  >
                    <span className="mobile-nav-num">{item.number}</span>
                    <span className="mobile-nav-title">{item.label}</span>
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mobile-cta-btn interactive"
              >
                Initier un échange <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
