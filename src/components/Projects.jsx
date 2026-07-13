import { motion } from 'framer-motion';
import { Blocks, Database, GitBranch, ShieldCheck } from 'lucide-react';

const project = {
  title: 'Blockchain locale en Python',
  tech: ['Python', 'Blockchain', 'Programmation from scratch'],
  description: 'Une blockchain locale développée from scratch afin de comprendre le fonctionnement des blocs, des transactions et de la chaîne.',
  github: 'https://github.com/Panda0831/blockhain'
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-tag">
          02. Projet réalisé
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="section-title">
          {project.title}
        </motion.h2>
        <div className="section-line" />
      </div>

      <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="project-feature glass-panel">
        <div className="blockchain-visual" aria-label="Schéma d'une blockchain locale">
          <span className="visual-caption">Architecture locale</span>
          <div className="blockchain-chain">
            <div className="chain-block"><Blocks size={24} /><span>Bloc 01</span></div>
            <div className="chain-link" />
            <div className="chain-block"><Database size={24} /><span>Bloc 02</span></div>
            <div className="chain-link" />
            <div className="chain-block"><ShieldCheck size={24} /><span>Bloc 03</span></div>
          </div>
          <p>Capture d’écran de l’application à venir</p>
        </div>

        <div className="project-feature-content">
          <div className="project-tech-tags">
            {project.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-highlights">
            <div><span>Objectif</span><p>Comprendre les fondations d’une blockchain.</p></div>
            <div><span>Concepts étudiés</span><p>Blocs, transactions et intégrité de la chaîne.</p></div>
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary interactive">
            Voir le dépôt GitHub <GitBranch size={18} />
          </a>
        </div>
      </motion.article>
    </section>
  );
}
