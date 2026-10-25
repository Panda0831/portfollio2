import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowUpRight, Blocks, Database, Server, Info } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import { BlockchainPreview, SchoolManagementPreview, ITAssetPreview } from './ProjectPreviews';

const projects = [
  {
    id: 'blockchain-registry',
    title: 'Registre Blockchain décentralisé',
    category: 'Systèmes distribués · Suivi de transactions · Django',
    previewType: 'blockchain',
    badge: 'Projet Fondamental',
    icon: <Blocks size={18} className="text-cyan" />,
    description:
      'Système de suivi de transactions basé sur la blockchain : noyau Python implémenté from scratch (hash SHA-256, Proof of Work) et exposé via un backend Django, un frontend React et une application mobile Expo.',
    longDescription:
      'Développée dans une démarche d’apprentissage approfondi des protocoles décentralisés. Sans s’appuyer sur des bibliothèques tierces abstraites, chaque élément (structure de bloc, calcul de hash, pool de transactions en mémoire et validation de la chaîne) a été implémenté à la main avec une suite de tests unitaires.',
    architecture:
      'Nœud autonome avec chaînage cryptographique par hash parent et validation de la chaîne. API REST exposée avec Django, interface React et application mobile Expo pour soumettre des transactions et vérifier l’intégrité du registre.',
    highlights: [
      'Implémentation de l’algorithme de Proof of Work à difficulté dynamique',
      'Chaînage cryptographique SHA-256 avec calcul du nonce déterministe',
      'Détection instantanée et rejet de toute altération de l’historique des blocs',
      'API REST (Django) pour inspecter la chaîne et diffuser des transactions',
      'Application mobile Expo pour consulter le registre'
    ],
    tech: ['Django (API REST)', 'React', 'Expo (React Native)', 'Python 3', 'SHA-256'],
    github: 'https://github.com/Panda0831/blockhain'
  },
  {
    id: 'school-management',
    title: 'Système de gestion d’établissement',
    category: 'Fullstack · Architecture moderne TypeScript',
    previewType: 'school',
    badge: 'Système d’Information',
    icon: <Database size={18} className="text-cyan" />,
    description:
      'Plateforme de gestion académique complète : gestion des cursus, calcul automatisé des moyennes semestrielles pondérées, suivi des délibérations et génération sécurisée de relevés de notes.',
    longDescription:
      'Conçu pour modéliser fidèlement les règles d’un établissement d’enseignement supérieur : gestion des promotions, coefficients de matières, clôture semestrielle et génération automatisée des bulletins officiels au format PDF.',
    architecture:
      'Modélisation relationnelle rigoureuse sous les méthodologies Merise (MCD, MLD) garantissant l’intégrité référentielle. Architecture moderne en TypeScript avec Prisma ORM (schéma typé de bout en bout), transactions pour la persistance des notes.',
    highlights: [
      'Schéma relationnel normalisé (plus de 15 tables) sans redondance',
      'Transactions ACID strictes lors des délibérations et calculs de rangs',
      'Contrôle d’accès basé sur les rôles (Admin, Enseignants, Étudiants)',
      'Export PDF des bulletins avec signature d’intégrité numérique'
    ],
    tech: ['TypeScript', 'Prisma ORM', 'React', 'PostgreSQL'],
    github: 'https://github.com/Panda0831'
  },
  {
    id: 'it-asset-management',
    title: 'Gestion de parc informatique (S3)',
    category: 'Infrastructure & Suivi · PHP · Tailwind CSS',
    previewType: 'it-asset',
    badge: 'Projet de Semestre 3',
    icon: <Server size={18} className="text-cyan" />,
    description:
      'Outil de suivi et d’inventaire du matériel informatique avec interface moderne : cycle de vie des équipements, affectations, statuts et historique des interventions.',
    longDescription:
      'Destiné à rationaliser la gestion du parc informatique : identification du matériel, suivi des équipements affectés, historique des interventions techniques et projection des coûts de renouvellement.',
    architecture:
      'Application PHP structurée en MVC avec une interface moderne construite en Tailwind CSS. Suivi des équipements, statuts d’affectation et journalisation des mouvements de parc.',
    highlights: [
      'Traçabilité complète des postes et serveurs par numéros de série et statuts',
      'Calcul automatique des amortissements comptables du matériel',
      'Suivi des tickets d’incidents techniques et des contrats de maintenance',
      'Tableaux de bord réactifs pour visualiser l’état global du parc'
    ],
    tech: ['PHP', 'Tailwind CSS', 'MySQL', 'Architecture MVC'],
    github: 'https://github.com/Panda0831'
  }
];

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const renderProjectPreview = (type) => {
    switch (type) {
      case 'blockchain':
        return <BlockchainPreview />;
      case 'school':
        return <SchoolManagementPreview />;
      case 'it-asset':
        return <ITAssetPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-head-editorial">
          <div className="section-kicker">
            <span className="kicker-num">03</span>
            <span className="kicker-title">Projets sélectionnés</span>
          </div>
          <h2 className="section-main-title">
            Conception d'architectures concrètes et code éprouvé.
          </h2>
          <p className="section-lead-desc">
            Des applications conçues avec une attention particulière portée à la robustesse du backend, 
            à la modélisation rigoureuse des données et à la clarté de l'interface.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-cards-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="project-card glass-panel"
            >
              {/* Bespoke Interactive UI Preview instead of AI stock image */}
              <div className="project-card-preview-wrap">
                {renderProjectPreview(project.previewType)}
                <div className="preview-top-badge">
                  <span className="project-badge">{project.badge}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="project-card-body">
                <div className="project-meta-top">
                  <span className="project-category">{project.category}</span>
                  <div className="project-icon-box">{project.icon}</div>
                </div>

                <h3 className="project-heading">{project.title}</h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Technical highlights summary */}
                <div className="project-key-bullets">
                  <div className="bullet-item">
                    <span className="bullet-dot" />
                    <span>{project.highlights[0]}</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-dot" />
                    <span>{project.highlights[1]}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="project-tech-pills">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>

                {/* Actions Footer */}
                <div className="project-card-actions">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-card-secondary interactive"
                  >
                    <Info size={15} />
                    <span>Architecture & Choix</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-primary interactive"
                    aria-label={`Voir le dépôt de ${project.title} sur GitHub`}
                  >
                    <span>Dépôt GitHub</span>
                    <GitBranch size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Global Projects Footer Strip */}
        <div className="projects-bottom-note glass-panel">
          <div className="bottom-note-left">
            <span className="note-kicker">Méthodologie logicielle</span>
            <p className="note-text">
              Chaque projet fait l’objet d’un travail préalable de modélisation (Merise/UML), 
              d’un versioning Git propre et documenté, et d’un respect des conventions de code (SOLID, PEP 8, Clean Architecture).
            </p>
          </div>
          <a
            href="https://github.com/Panda0831"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-swiss-secondary interactive"
          >
            <span>Tous mes dépôts sur GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>

      {/* Modal for In-depth Architecture Details */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
