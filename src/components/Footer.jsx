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
          <span className="logo-text">Fanamby Manjaka<span>.</span></span>
          <p>Étudiant développeur full-stack à ESMIA Innovations.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Panda0831" target="_blank" rel="noopener noreferrer" className="social-icon interactive" aria-label="GitHub">
            <GitBranch size={20} />
          </a>
          <a href="https://www.facebook.com/tenessyhennessy/" target="_blank" rel="noopener noreferrer" className="social-icon interactive" aria-label="Facebook">
            <MessageSquare size={20} />
          </a>
          <a href="https://www.linkedin.com/in/manjaka-fanamby-0365b52ab/" target="_blank" rel="noopener noreferrer" className="social-icon interactive" aria-label="LinkedIn">
            <Share size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Fanamby Manjaka. Tous droits réservés.</p>
          <button onClick={handleScrollToTop} className="scroll-top-btn interactive" aria-label="Scroll to top">
            Retour en haut <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
