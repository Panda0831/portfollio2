import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Code2 } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import { BlockchainPreview, SchoolManagementPreview, ITAssetPreview } from './ProjectPreviews';

const ease = [0.28, 0.11, 0.32, 1];

const projects = [
  {
    id: 'blockchain-registry',
    title: 'Registre blockchain décentralisé',
    category: 'Systèmes distribués · Django · React · Expo',
    previewType: 'blockchain',
    problem: 'Comprendre et implémenter les mécanismes de confiance d’un registre distribué, sans dépendre d’une bibliothèque blockchain abstraite.',
    description:
      'Système de suivi de transactions : noyau Python from scratch (hash SHA-256, Proof of Work), exposé via Django, un frontend React et une application mobile Expo.',
    longDescription:
      'Développée dans une démarche d’apprentissage approfondi des protocoles décentralisés. Sans s’appuyer sur des bibliothèques tierces abstraites, chaque élément (structure de bloc, calcul de hash, pool de transactions en mémoire et validation de la chaîne) a été implémenté à la main avec une suite de tests unitaires.',
    architecture:
      'Nœud autonome avec chaînage cryptographique par hash parent et validation de la chaîne. API REST exposée avec Django, interface React et application mobile Expo pour soumettre des transactions et vérifier l’intégrité du registre.',
    highlights: [
      'Implémentation de l’algorithme de Proof of Work à difficulté dynamique',
      'Chaînage cryptographique SHA-256 avec calcul du nonce déterministe',
      'Détection instantanée et rejet de toute altération de l’historique des blocs',
      'API REST (Django) pour inspecter la chaîne et diffuser des transactions',
      'Application mobile Expo pour consulter le registre',
    ],
    tech: ['Python 3', 'Django (API REST)', 'React', 'Expo (React Native)', 'SHA-256'],
    github: 'https://github.com/Panda0831/blockhain',
    accent: 'blue',
  },
  {
    id: 'school-management',
    title: 'Système de gestion d’établissement',
    category: 'Fullstack · TypeScript · Prisma · PostgreSQL',
    previewType: 'school',
    problem: 'Modéliser fidèlement les règles académiques (coefficients, délibérations, bulletins) avec intégrité des données et traçabilité.',
    description:
      'Plateforme académique complète : gestion des cursus, calcul automatisé des moyennes pondérées, suivi des délibérations et génération sécurisée de relevés de notes.',
    longDescription:
      'Conçu pour modéliser fidèlement les règles d’un établissement d’enseignement supérieur : gestion des promotions, coefficients de matières, clôture semestrielle et génération automatisée des bulletins officiels au format PDF.',
    architecture:
      'Modélisation relationnelle rigoureuse sous les méthodologies Merise (MCD, MLD) garantissant l’intégrité référentielle. Architecture moderne en TypeScript avec Prisma ORM (schéma typé de bout en bout), transactions pour la persistance des notes.',
    highlights: [
      'Schéma relationnel normalisé (plus de 15 tables) sans redondance',
      'Transactions ACID strictes lors des délibérations et calculs de rangs',
      'Contrôle d’accès basé sur les rôles (Admin, Enseignants, Étudiants)',
      'Export PDF des bulletins avec signature d’intégrité numérique',
    ],
    tech: ['TypeScript', 'Prisma ORM', 'React', 'PostgreSQL'],
    github: 'https://github.com/Panda0831',
    accent: 'neutral',
  },
  {
    id: 'it-asset-management',
    title: 'Gestion de parc informatique',
    category: 'Infrastructure · PHP · Tailwind CSS · MySQL',
    previewType: 'it-asset',
    problem: 'Suivre le cycle de vie du matériel informatique, les affectations et les interventions sans perdre l’historique du parc.',
    description:
      'Outil d’inventaire et de suivi : équipements, statuts, affectations, historique des interventions et tableaux de bord réactifs.',
    longDescription:
      'Destiné à rationaliser la gestion du parc informatique : identification du matériel, suivi des équipements affectés, historique des interventions techniques et projection des coûts de renouvellement.',
    architecture:
      'Application PHP structurée en MVC avec une interface moderne construite en Tailwind CSS. Suivi des équipements, statuts d’affectation et journalisation des mouvements de parc.',
    highlights: [
      'Traçabilité complète des postes et serveurs par numéros de série et statuts',
      'Calcul automatique des amortissements comptables du matériel',
      'Suivi des tickets d’incidents techniques et des contrats de maintenance',
      'Tableaux de bord réactifs pour visualiser l’état global du parc',
    ],
    tech: ['PHP', 'Tailwind CSS', 'MySQL', 'Architecture MVC'],
    github: 'https://github.com/Panda0831',
    accent: 'graphite',
  },
];

function ProjectVisual({ type }) {
  if (type === 'blockchain') return <BlockchainPreview />;
  if (type === 'school') return <SchoolManagementPreview />;
  if (type === 'it-asset') return <ITAssetPreview />;
  return null;
}

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="projects-section apple-section">
      <div className="section-container">
        <div className="apple-section-head apple-section-head--center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="apple-eyebrow"
          >
            Projets
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="apple-headline"
          >
            Conçus comme des produits.
            <br />
            Pensés comme des systèmes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="apple-section-intro"
          >
            Des réalisations qui mettent l’accent sur la modélisation, la fiabilité du backend et la clarté de
            l’expérience.
          </motion.p>
        </div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease }}
              className={`project-showcase-row ${index % 2 === 1 ? 'is-reversed' : ''} accent-${project.accent}`}
            >
              <div className="project-showcase-copy">
                <p className="project-showcase-category">{project.category}</p>
                <h3 className="project-showcase-title">{project.title}</h3>
                <p className="project-showcase-problem">
                  <span>Problématique.</span> {project.problem}
                </p>
                <p className="project-showcase-desc">{project.description}</p>
                <ul className="project-showcase-tech" aria-label="Technologies">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-showcase-actions">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="btn-apple-primary interactive"
                  >
                    Découvrir le projet <ChevronRight size={16} aria-hidden="true" />
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-apple-secondary interactive"
                  >
                    GitHub <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="project-showcase-visual">
                <div className="project-showcase-visual-frame">
                  <ProjectVisual type={project.previewType} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="projects-footer-link"
        >
          <a href="https://github.com/Panda0831" target="_blank" rel="noopener noreferrer" className="apple-inline-link interactive">
            Voir tous les dépôts sur GitHub <Code2 size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <ProjectDetailModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
