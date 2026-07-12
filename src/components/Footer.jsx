import { GitBranch, MessageSquare, Share, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-text">DENVER<span>.</span></span>
          <p>Création d'expériences web interactives et modernes.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon interactive" aria-label="GitHub">
            <GitBranch size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon interactive" aria-label="Twitter">
            <MessageSquare size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon interactive" aria-label="LinkedIn">
            <Share size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 DENVER. Tous droits réservés.</p>
          <button onClick={handleScrollToTop} className="scroll-top-btn interactive" aria-label="Scroll to top">
            Retour en haut <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
