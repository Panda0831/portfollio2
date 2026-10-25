import { motion } from 'framer-motion';
import { Database, FileCheck, Layers, Terminal, Award, CheckCircle, Code2 } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Modélisation & Intégrité des Données',
    icon: <Database className="pillar-icon text-cyan" size={18} />,
    desc: 'Conception préalable rigoureuse selon les méthodes Merise (MCD, MLD) et diagrammes UML. Normalisation des schémas relationnels (3NF), respect strict des garanties ACID et requêtes SQL optimisées.'
  },
  {
    num: '02',
    title: 'Backends Modulaires & APIs Résilientes',
    icon: <Layers className="pillar-icon text-cyan" size={18} />,
    desc: 'Développement de services fiables en Python (Django) et Java (Spring Boot, Hibernate). Architecture en couches (Clean Architecture), validation stricte des données entrantes et gestion soignée des exceptions.'
  },
  {
    num: '03',
    title: 'Interfaces Modernes & Expérience Fluide',
    icon: <Code2 className="pillar-icon text-cyan" size={18} />,
    desc: 'Construction d’applications web réactives avec React et TailwindCSS, et d’applications mobiles avec React Native / Expo. Attention constante portée à la clarté visuelle, à l’accessibilité et à la fluidité des micro-interactions.'
  }
];

const credentials = [
  {
    badge: 'Langue · Obtenu octobre 2026',
    title: 'Certification DELF B2',
    issuer: 'Ministère français de l’Éducation Nationale',
    desc: 'Niveau B2 en français officiellement validé (oct. 2026). Aisance pour rédiger des documentations techniques précises et échanger au sein d’équipes francophones ou internationales.',
    icon: <FileCheck size={18} className="text-cyan" />
  },
  {
    badge: 'Programmation Python · En cours',
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy & OpenEDG Python Institute',
    desc: 'Certifications en cours de préparation : programmation orientée objet, conception modulaire, structures de données natives, gestion d’exceptions et manipulation de fichiers.',
    icon: <Terminal size={18} className="text-cyan" />
  },
  {
    badge: 'Systèmes Entreprise · En cours',
    title: 'IBM Z Explorer',
    issuer: 'IBM',
    desc: 'Parcours d’initiation aux exigences des systèmes d’entreprise : haute disponibilité, intégrité transactionnelle et traitement de volumes de données critiques.',
    icon: <Award size={18} className="text-cyan" />
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-head-editorial">
          <div className="section-kicker">
            <span className="kicker-num">01</span>
            <span className="kicker-title">Parcours & Méthode</span>
          </div>
          <h2 className="section-main-title">
            Comprendre les fondations sous le capot pour construire des logiciels solides.
          </h2>
        </div>

        {/* Bio & Philosophy Grid */}
        <div className="about-narrative-grid">
          
          <div className="narrative-main">
            <p className="narrative-lead">
              Actuellement en 3e année de Licence Génie Logiciel à l’<strong>ESMIA Innovation</strong> (Antanimena), passionné par le développement fullstack et le Data Engineering. Classé <strong>1er au semestre 4</strong> avec 15.49/20, j’aborde le développement avec curiosité technique, rigueur méthodologique et sens pratique.
            </p>
            <p className="narrative-body">
              Plutôt que d'utiliser des bibliothèques et frameworks comme de simples boîtes noires, je cherche toujours à comprendre leurs mécanismes internes. C'est cette démarche qui m'a conduit à développer un <strong>registre blockchain décentralisé</strong> : noyau Python from scratch avec calcul de hash SHA-256, preuve de travail et détection d'altérations, exposé via un backend Django, un frontend React et une application mobile Expo.
            </p>
            <p className="narrative-body">
              Pour mon stage de fin d'études de 6 mois à partir du <strong>30 décembre 2026</strong>, mon objectif est de m'intégrer au sein d'une équipe technique exigeante où je pourrai mettre à profit mes compétences en conception backend, modélisation de données et développement fullstack.
            </p>

            <div className="about-status-strip">
              <div className="status-item">
                <span className="status-label">POSTE VISÉ</span>
                <span className="status-value">Stage Développeur Fullstack / Backend / Data</span>
              </div>
              <div className="status-item">
                <span className="status-label">VALEURS CLÉS</span>
                <span className="status-value">Clarté du code, modélisation rigoureuse, régularité</span>
              </div>
            </div>
          </div>

          <div className="narrative-side">
            <div className="profile-focus-card glass-panel">
              <div className="focus-header">
                <span className="focus-kicker">FOCUS TECHNIQUE & OUTILS</span>
                <span className="focus-badge">Actif</span>
              </div>
              <h3 className="focus-title">Ce que j’apporte au quotidien</h3>
              
              <ul className="focus-list">
                <li>
                  <CheckCircle size={15} className="text-cyan" />
                  <div>
                    <strong>Modélisation avant le code :</strong> Définition claire des entités, schémas relationnels et contrats d’API avant tout développement.
                  </div>
                </li>
                <li>
                  <CheckCircle size={15} className="text-cyan" />
                  <div>
                    <strong>Code structuré & testé :</strong> Respect des principes SOLID, séparation claire des responsabilités et tests unitaires.
                  </div>
                </li>
                <li>
                  <CheckCircle size={15} className="text-cyan" />
                  <div>
                    <strong>Communication fluide :</strong> Capacité à documenter les décisions d'architecture et à collaborer efficacement en équipe francophone ou internationale.
                  </div>
                </li>
              </ul>

              <div className="focus-footer">
                <span className="focus-meta">Classé 1er au semestre 4 · Licence Génie Logiciel – SIO</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pillars Cards */}
        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="pillar-card glass-panel interactive"
            >
              <div className="pillar-header">
                <span className="pillar-num">{pillar.num}</span>
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Block */}
        <div className="credentials-section">
          <div className="credentials-head">
            <span className="credentials-kicker">Certifications & Formations Complémentaires</span>
            <h3 className="credentials-title">Attestations officielles & validation des acquis</h3>
          </div>

          <div className="credentials-grid">
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="credential-card glass-panel interactive"
              >
                <div className="cred-top">
                  <span className="cred-badge">{cred.badge}</span>
                  <div className="cred-icon-box">{cred.icon}</div>
                </div>
                <h4 className="cred-name">{cred.title}</h4>
                <span className="cred-issuer">{cred.issuer}</span>
                <p className="cred-desc">{cred.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
