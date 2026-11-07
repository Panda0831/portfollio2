import { motion } from "framer-motion";
import {
  Zap,
  Server,
  FileCheck,
  Terminal,
  Cpu,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";

const achievementsList = [
  {
    type: "hackathon ",
    title: "Hackathon interne ESMIA (Fullstack/coup de coeur)",
    organization: "ESMIA Innovation",
    year: "Hackathon",
    grade: "Application de suivi de grossesse",
    icon: <Zap size={22} className="text-cyan" />,
    badge: "Fullstack",
    description:
      "Conception et développement d’une application de suivi de grossesse en équipe, du modèle de données aux écrans, dans un format sprint avec livrable fonctionnel à la fin de l’événement.",
    metrics: [
      "Développement fullstack sous contrainte de temps",
      "Modélisation des données et interface utilisateur",
      "Travail d’équipe et présentation du livrable",
    ],
  },
  {
    type: "hackathon ",
    title: "Prototypes (1er place)",
    organization: "INDABAX MADAGASCAR X FCOI",
    year: "Hackathon",
    grade: "HAZO LOVA IA",
    icon: <Zap size={22} className="text-cyan" />,
    badge: "Fullstack",
    description:
      "Conception et développement d’une application de suivi des vanilles a madagascar  suivi par une IA de reconnaissances par photo des qualite des vanilles a madagascar",
    metrics: [
      "Développement fullstack sous contrainte de temps",
      "Modélisation des données et interface utilisateur",
      "Travail d’équipe et présentation du livrable",
      "Integration d'une IA d'analyse photographique des gousses de vanilles",
    ],
  },
  {
    type: "hackathon",
    title: "Hackathon Orange (Backend)",
    organization: "Orange",
    year: "Hackathon",
    grade: "Développement côté serveur",
    icon: <Server size={22} className="text-cyan" />,
    badge: "Backend",
    description:
      "Participation à un hackathon organisé par Orange avec un rôle centré sur le serveur : construction des services et endpoints nécessaires à l’application proposée.",
    metrics: [
      "Développement côté serveur (API, logique métier)",
      "Collaboration avec le reste de l’équipe projet",
      "Livraison dans un format de compétition court",
    ],
  },
  {
    type: "certification",
    title: "Certification DELF B2 (Langue Française)",
    organization: "Ministère français de l’Éducation Nationale",
    year: "Obtenu · octobre 2026",
    grade: "Niveau B2",
    icon: <FileCheck size={22} className="text-cyan" />,
    badge: "Obtenu",
    description:
      "Validation officielle du niveau B2 en français : rédaction et présentation d’un contenu structuré, utile à la documentation technique et aux échanges en équipe.",
    metrics: [
      "Niveau B2 validé officiellement (oct. 2026)",
      "Comfort à l’écrit comme à l’oral",
    ],
  },
  {
    type: "certification",
    title: "Cisco Networking Academy : Python Essentials 1 & 2",
    organization: "Cisco & OpenEDG Python Institute",
    year: "En cours",
    grade: "Programmation Python",
    icon: <Terminal size={22} className="text-cyan" />,
    badge: "En cours",
    description:
      "Préparation aux certifications Python Essentials 1 & 2 du Python Institute : syntaxe, structures, programmation orientée objet, modules et fichiers.",
    metrics: [
      "Modules suivis dans le cadre du parcours ESMIA",
      "Base pour les projets Python du portfolio",
    ],
  },
  {
    type: "certification",
    title: "IBM Z Explorer (Systèmes Grands Comptes)",
    organization: "IBM",
    year: "En cours",
    grade: "Systèmes Entreprise",
    icon: <Cpu size={22} className="text-cyan" />,
    badge: "En cours",
    description:
      "Parcours d’initiation IBM aux exigences des systèmes d’entreprise : disponibilité, intégrité transactionnelle et sécurité des infrastructures critiques.",
    metrics: [
      "Architecture des systèmes z/OS",
      "Fiabilité et sécurité des applications d’entreprise",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-head-editorial">
          <div className="section-kicker">
            <span className="kicker-num">05</span>
            <span className="kicker-title">
              Distinctions, Hackathons & Certifications
            </span>
          </div>
          <h2 className="section-main-title">
            Réalisations et engagements en dehors de la salle de cours.
          </h2>
          <p className="section-lead-desc">
            Hackathons, ateliers techniques et certifications officielles : les
            preuves concrètes de mon implication au-delà du programme
            académique.
          </p>
        </div>

        {/* Academic Honor Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="honor-spotlight-card glass-panel interactive"
        >
          <div className="spotlight-left">
            <div className="spotlight-badge-row">
              <span className="spotlight-badge">SEMESTRE 4 · CLASSÉ 1ER</span>
              <span className="spotlight-rank">15.49 / 20</span>
            </div>
            <h3 className="spotlight-title">
              1er au semestre 4 — Licence Génie Logiciel
            </h3>
            <p className="spotlight-text">
              Meilleure moyenne du semestre 4 à l’
              <strong>ESMIA Innovation (Antanimena)</strong>, à l’issue d’une
              progression régulière : 12.45 (S1), 14.15 (S2), 15.30 (S3), 15.49
              (S4). Un travail constant sur les fondamentaux, les projets
              appliqués et la rigueur de conception.
            </p>
            <div className="spotlight-stats-row">
              <div className="stat-pill">
                <span className="sp-val">15.49</span>
                <span className="sp-lbl">Moyenne du S4</span>
              </div>
              <div className="stat-pill">
                <span className="sp-val">+3.04</span>
                <span className="sp-lbl">Points depuis le S1</span>
              </div>
              <div className="stat-pill">
                <span className="sp-val">+7</span>
                <span className="sp-lbl">Ateliers techniques depuis 2024</span>
              </div>
            </div>
          </div>
          <div className="spotlight-right">
            <div className="academic-seal-card">
              <div className="seal-badge-icon">
                <GraduationCap size={32} className="text-cyan" />
              </div>
              <div className="seal-meta">
                <span className="seal-org">ESMIA INNOVATION · ANTANIMENA</span>
                <span className="seal-award">1ER / SEMESTRE 4</span>
                <span className="seal-mention">
                  15.49 / 20 · Licence Génie Logiciel
                </span>
                <span className="seal-cohort">
                  Progression : S1 → S4 · 2024 – 2026
                </span>
              </div>
              <div className="seal-id-tag">
                <span>
                  <Trophy size={12} /> CLASSÉ 1ER AU SEMESTRE 4
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="achievements-cards-grid">
          {achievementsList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="achievement-card glass-panel interactive"
            >
              <div className="ach-top">
                <div className="ach-icon-box">{item.icon}</div>
                <div className="ach-badge-wrap">
                  <span className="ach-badge">{item.badge}</span>
                </div>
              </div>

              <h4 className="ach-title">{item.title}</h4>
              <div className="ach-meta">
                <span className="ach-org">{item.organization}</span>
                <span className="ach-dot">•</span>
                <span className="ach-year">{item.year}</span>
              </div>

              <p className="ach-desc">{item.description}</p>

              <div className="ach-metrics-list">
                {item.metrics.map((m, i) => (
                  <div key={i} className="ach-metric-item">
                    <span className="ach-bullet" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Mindset Note */}
        <div className="hackathon-mindset-banner glass-panel">
          <div className="mindset-icon-box">
            <Users size={24} className="text-cyan" />
          </div>
          <div className="mindset-content">
            <h4 className="mindset-title">
              L’Esprit d’Équipe & La Pression des Hackathons
            </h4>
            <p className="mindset-desc">
              Les hackathons m’ont appris la valeur de l’écoute active, de la
              clarté dans la répartition des tâches et du pragmatisme technique
              : livrer un système qui fonctionne réellement, en arbitrant entre
              la perfection théorique et les contraintes du temps réel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
