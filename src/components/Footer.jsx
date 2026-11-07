import { ArrowUp, Code2, BriefcaseBusiness, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <footer className="footer-apple">
      <div className="section-container">
        <div className="footer-cta">
          <p className="footer-cta-eyebrow">Disponible dès le 30 décembre 2026</p>
          <h2 className="footer-cta-title">Ouvert aux opportunités de stage.</h2>
          <p className="footer-cta-text">
            6 mois · Fullstack, Backend ou Data Engineering · Présentiel, hybride ou télétravail.
          </p>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-apple-primary interactive">
            Démarrer un échange
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-name">Fanamby Manjaka</p>
            <p className="footer-role">Étudiant en Génie Logiciel · Fullstack & Data Engineering</p>
            <p className="footer-note">Conçu avec soin, rigueur et attention au détail.</p>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Navigation</p>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="footer-link interactive">Profil</a>
            <a href="#academic" onClick={(e) => handleNavClick(e, '#academic')} className="footer-link interactive">Parcours</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="footer-link interactive">Projets</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="footer-link interactive">Compétences</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="footer-link interactive">Contact</a>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <a href="mailto:fanambymanjaka9@gmail.com" className="footer-link interactive">fanambymanjaka9@gmail.com</a>
            <a href="tel:+261387214362" className="footer-link interactive">038 72 143 62</a>
            <p className="footer-muted">IAV 214 H, Iavoloha — Antananarivo</p>
            <div className="footer-socials">
              <a href="https://github.com/Panda0831" target="_blank" rel="noopener noreferrer" className="footer-social interactive" aria-label="GitHub">
                <Code2 size={18} />
              </a>
              <a href="https://www.linkedin.com/in/manjaka-fanamby-0365b52ab/" target="_blank" rel="noopener noreferrer" className="footer-social interactive" aria-label="LinkedIn">
                <BriefcaseBusiness size={18} />
              </a>
              <a href="mailto:fanambymanjaka9@gmail.com" className="footer-social interactive" aria-label="E-mail">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Fanamby Manjaka. Tous droits réservés.</p>
          <button type="button" onClick={scrollToTop} className="footer-top-btn interactive">
            Retour en haut <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
