import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GitBranch, CheckCircle2, Layers, Database, Shield } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !project) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button, a')?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose, project]);

  return (
    <AnimatePresence>
      {isOpen && project && <motion.div
        className="modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="presentation"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="modal-content glass-panel"
          onClick={(e) => e.stopPropagation()}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          tabIndex={-1}
        >
          {/* Header */}
          <div className="modal-header">
            <div>
              <span className="modal-category">{project.category}</span>
              <h3 className="modal-title" id="project-dialog-title">{project.title}</h3>
            </div>
            <button onClick={onClose} className="modal-close-btn interactive" aria-label="Fermer la modal">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="modal-section">
              <h4 className="modal-section-title"><Layers size={16} /> Contexte & Objectifs</h4>
              <p className="modal-text">{project.longDescription || project.description}</p>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title"><Database size={16} /> Choix d’Architecture & Données</h4>
              <p className="modal-text">{project.architecture}</p>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title"><Shield size={16} /> Points Forts Techniques</h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">Technologies Utilisées</h4>
              <div className="modal-tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss-primary interactive"
            >
              <span>Voir le Code sur GitHub</span>
              <GitBranch size={16} />
            </a>
            <button onClick={onClose} className="btn-swiss-secondary interactive">
              Fermer
            </button>
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}
