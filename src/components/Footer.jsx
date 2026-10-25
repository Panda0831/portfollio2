import { ArrowUp, GitBranch, Mail } from 'lucide-react';

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-swiss">
      <div className="section-container">
        
        {/* Top Grid */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <span className="footer-brand-title">FANAMBY MANJAKA</span>
            <p className="footer-brand-desc">
              Étudiant en 3ème année de Licence Génie Logiciel (SIO) à l’ESMIA Innovation (Antanimena), 
              classé 1er au semestre 4. Spécialisé en développement Fullstack & Data Engineering. 
              En recherche active d’un stage de fin d’études de 6 mois dès le 30 décembre 2026.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <div className="footer-links-list">
              <a href="#about" className="footer-link interactive">Profil</a>
              <a href="#academic" className="footer-link interactive">Trajectoire académique</a>
              <a href="#projects" className="footer-link interactive">Réalisations</a>
              <a href="#skills" className="footer-link interactive">Compétences</a>
              <a href="#achievements" className="footer-link interactive">Distinctions & Hackathons</a>
              <a href="#contact" className="footer-link interactive">Contact & Stage</a>
            </div>
          </div>

          <div className="footer-meta-col">
            <span className="footer-col-title">COORDONNÉES & FUSEAU</span>
            <div className="footer-meta-info">
              <p>IAV 214 H, Iavoloha — Antananarivo, Madagascar</p>
              <p className="meta-dim">Fuseau : UTC+3 (East Africa Time)</p>
              <div className="footer-socials-row">
                <a
                  href="https://github.com/Panda0831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link interactive"
                  aria-label="GitHub"
                >
                  <GitBranch size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manjaka-fanamby-0365b52ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link interactive"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href="mailto:fanambymanjaka9@gmail.com"
                  className="footer-social-link interactive"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-line">
          <p className="footer-copyright">
            © 2026 Fanamby Manjaka — Conçu et développé avec soin.
          </p>

          <button onClick={scrollToTop} className="footer-back-to-top interactive">
            <span>Retour en haut</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
