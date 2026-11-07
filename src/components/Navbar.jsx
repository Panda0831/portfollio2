import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Profil', href: '#about' },
  { label: 'Parcours', href: '#academic' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Distinctions', href: '#achievements' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      const sectionIds = ['home', 'about', 'academic', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
      className={`navbar-header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="navbar-brand interactive"
          aria-label="Fanamby Manjaka — accueil"
        >
          <span className="brand-name">Fanamby Manjaka</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link interactive ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="navbar-cta-group">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="navbar-cta-btn interactive"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle-btn interactive"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.28, 0.11, 0.32, 1] }}
            className="mobile-drawer"
          >
            <div className="mobile-drawer-inner" id="mobile-navigation">
              <div className="mobile-nav-links">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`mobile-nav-link interactive ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mobile-cta-btn interactive"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
