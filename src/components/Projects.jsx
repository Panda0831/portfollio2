import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GitBranch, ExternalLink, Search } from 'lucide-react';
import novaImg from '../assets/project_nova.jpg';
import aetherImg from '../assets/project_aether.jpg';
import helixImg from '../assets/project_helix.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Quantum Analytics (Nova)',
    category: 'creative-dev',
    tech: ['React', 'WebGL', 'Framer Motion', 'Canvas'],
    desc: 'Un tableau de bord analytique futuriste doté d\'une interface interactive en verre dépoli (glassmorphic) et de visualisations de données 3D temps réel.',
    image: novaImg,
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 2,
    title: 'Aether Editor',
    category: 'fullstack',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Slate.js'],
    desc: 'Un éditeur de texte Markdown minimaliste et immersif avec gestion en temps réel de documents, transitions d\'interface fluides et mise en page épurée.',
    image: aetherImg,
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 3,
    title: 'Helix Creative Agency',
    category: '3d-webgl',
    tech: ['React Three Fiber', 'Three.js', 'GSAP', 'Vite'],
    desc: 'Site vitrine haut de gamme pour une agence créative intégrant une double hélice 3D interactive en nuage de points réagissant au défilement et aux mouvements.',
    image: helixImg,
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'creative-dev', name: 'Creative Dev' },
  { id: 'fullstack', name: 'Fullstack' },
  { id: '3d-webgl', name: '3D & WebGL' }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ProjectCard = ({ project }) => {
    const { scrollYProgress } = useScroll({
      target: document.getElementById(`project-${project.id}`),
      offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        key={project.id}
        id={`project-${project.id}`}
        className="project-card glass-panel"
      >
        <div className="project-image-wrapper">
          <motion.div 
            style={{ y, scale }}
            className="project-image-motion"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
            />
          </motion.div>
          <div className="project-overlay">
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link-btn interactive"
                aria-label="GitHub Repository"
              >
                <GitBranch size={20} />
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link-btn interactive"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-tech-tags">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-tag">{t}</span>
            ))}
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.desc}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          02. Mes Créations
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Projets Sélectionnés
        </motion.h2>
        <div className="section-line" />
      </div>

      {/* Categories Filter Tabs */}
      <div className="projects-filter">
        {categories.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn interactive ${isActive ? 'active' : ''}`}
            >
              {cat.name}
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="filter-active-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="projects-search">
        <div className="search-wrapper glass-panel">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Rechercher un projet, une technologie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Projects Grid with Layout Animations */}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="no-projects"
            >
              <p>Aucun projet ne correspond à votre recherche.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
