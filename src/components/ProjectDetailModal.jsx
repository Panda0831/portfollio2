import { motion, AnimatePresence } from 'framer-motion';
import { X, GitBranch, CheckCircle2, Layers, Database, Shield } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="modal-content glass-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div>
              <span className="modal-category">{project.category}</span>
              <h3 className="modal-title">{project.title}</h3>
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
      </div>
    </AnimatePresence>
  );
}
