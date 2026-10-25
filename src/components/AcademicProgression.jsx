import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Award, BookOpen, CheckCircle, Calendar, GraduationCap, ChevronRight, BarChart3, Users } from 'lucide-react';

const academicStages = [
  {
    year: 'Semestre 1',
    period: '2024',
    average: '12.45',
    numAverage: 12.45,
    rank: '9ème / promotion',
    stage: 'Fondations Algorithmiques & Systèmes',
    summary: 'Acquisition des bases rigoureuses de l’informatique théorique et de la programmation structurée.',
    keyPoints: [
      'Algorithmique fondamentale & structures de données',
      'Programmation structurée et premiers projets en C',
      'Mathématiques discrètes, logique et algèbre booléenne',
      'Systèmes d’exploitation et commandes Unix / Linux'
    ],
    reflection: 'Une première étape déterminante qui a forgé ma méthode de travail, ma rigueur logique et confirmé mon intérêt pour le génie logiciel.'
  },
  {
    year: 'Semestre 2',
    period: '2024 – 2025',
    average: '14.15',
    numAverage: 14.15,
    rank: '5ème / promotion',
    stage: 'Programmation Orientée Objet & Bases de Données',
    summary: 'Montée en puissance : passage du code impératif aux applications structurées autour de la donnée.',
    keyPoints: [
      'Programmation orientée objet (Java, Python)',
      'Bases de données relationnelles et requêtes SQL',
      'Introduction à la modélisation (UML, Merise MCD / MLD)',
      'Développement web : PHP, JavaScript et architectures MVC'
    ],
    reflection: 'Une progression nette (+1.7 pt) grâce à une pratique intensive du code et à la réalisation de projets applicatifs complets.'
  },
  {
    year: 'Semestre 3',
    period: '2025',
    average: '15.30',
    numAverage: 15.30,
    rank: '3ème / promotion',
    stage: 'Frameworks Backend & Interfaces Modernes',
    summary: 'Consolidation de l’architecture fullstack : du modèle de données à l’interface utilisateur.',
    keyPoints: [
      'Spring Boot & Hibernate : architecture en couches, ORM',
      'Django : modélisation et API REST',
      'React & TypeScript : interfaces composables et typées',
      'React Native / Expo : premières applications mobiles'
    ],
    reflection: 'Troisième position du classement, portée par les projets appliqués : un outil de gestion de parc informatique et les premiers hackathons (ESMIA, Orange).'
  },
  {
    year: 'Semestre 4',
    period: '2025 – 2026',
    average: '15.49',
    numAverage: 15.49,
    rank: '1er / promotion',
    stage: 'Spécialisation Fullstack & Data Engineering',
    summary: 'Semestre de consécration : meilleure moyenne de la promotion et projets de données aboutis.',
    keyPoints: [
      'Data Engineering : pipelines ETL et traitement de données (Python)',
      'SQL avancé : PostgreSQL, MySQL, SQLite',
      'Architecture TypeScript + Prisma ORM (gestion d’établissement)',
      'Registre blockchain décentralisé : Python, Django, React, Expo'
    ],
    reflection: 'Classé 1er au semestre 4 avec une moyenne générale de 15.49. Preuve d’une régularité dans l’effort (12.45 → 14.15 → 15.30 → 15.49) et d’une maturité de conception.'
  }
];

export default function AcademicProgression() {
  const [selectedStage, setSelectedStage] = useState(3); // Default to S4

  return (
    <section id="academic" className="academic-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-head-editorial">
          <div className="section-kicker">
            <span className="kicker-num">02</span>
            <span className="kicker-title">Parcours académique</span>
          </div>
          <h2 className="section-main-title">
            Une progression constante, semestre après semestre : classé 1er au S4.
          </h2>
          <p className="section-lead-desc">
            Licence Génie Logiciel – SIO (Services Informatiques aux Organisations), ESMIA Innovation (Antanimena), depuis 2024. Une trajectoire qui monte régulièrement : 12.45, 14.15, 15.30, 15.49.
          </p>
        </div>

        {/* Highlight KPI Cards */}
        <div className="academic-kpi-grid">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="kpi-card glass-panel interactive highlight-border"
          >
            <div className="kpi-top">
              <span className="kpi-label">MOYENNE (SEMESTRE 4)</span>
              <Award className="kpi-icon text-cyan" size={18} />
            </div>
            <div className="kpi-value">15.49 <span className="kpi-denom">/ 20</span></div>
            <div className="kpi-footer">
              <span className="kpi-badge-cyan">Semestre 4</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="kpi-card glass-panel interactive highlight-border"
          >
            <div className="kpi-top">
              <span className="kpi-label">CLASSEMENT PROMOTION</span>
              <GraduationCap className="kpi-icon text-cyan" size={18} />
            </div>
            <div className="kpi-value">N° 1 <span className="kpi-denom">/ S4</span></div>
            <div className="kpi-footer">
              <span className="kpi-badge-gold">Étudiant le mieux classé</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="kpi-card glass-panel interactive"
          >
            <div className="kpi-top">
              <span className="kpi-label">GAIN DE PROGRESSION</span>
              <TrendingUp className="kpi-icon text-cyan" size={18} />
            </div>
            <div className="kpi-value">+3.04 <span className="kpi-denom">pts</span></div>
            <div className="kpi-footer">
              <span className="kpi-subtext">De 12.45 (S1) à 15.49 (S4)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.21, ease: [0.22, 1, 0.36, 1] }}
            className="kpi-card glass-panel interactive"
          >
            <div className="kpi-top">
              <span className="kpi-label">ENGAGEMENT TECHNIQUE</span>
              <Users className="kpi-icon text-cyan" size={18} />
            </div>
            <div className="kpi-value">+7 <span className="kpi-denom">ateliers</span></div>
            <div className="kpi-footer">
              <span className="kpi-subtext">Ateliers techniques suivis depuis 2024</span>
            </div>
          </motion.div>
        </div>

        {/* Milestone Progression Explorer */}
        <div className="academic-trajectory-block glass-panel">
          <div className="chart-header">
            <div>
              <span className="chart-kicker">ÉVOLUTION PAR SEMESTRE</span>
              <h3 className="chart-title">Moyenne et classement, de S1 à S4</h3>
            </div>
            <div className="chart-legend">
              <BarChart3 size={15} className="text-cyan" />
              <span className="legend-text">Progression continue sur 4 semestres</span>
            </div>
          </div>

          {/* Progression Stepper Bars */}
          <div className="progression-stepper-visual">
            {academicStages.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              const widthPct = (stage.numAverage / 20) * 100;
              return (
                <div
                  key={stage.year}
                  onClick={() => setSelectedStage(idx)}
                  className={`progression-step-bar interactive ${isSelected ? 'active' : ''}`}
                >
                  <div className="bar-header-line">
                    <span className="bar-year">{stage.year}</span>
                    <span className="bar-rank-badge">{stage.rank}</span>
                    <span className="bar-grade-val">{stage.average} / 20</span>
                  </div>

                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${widthPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  <div className="bar-sub-caption">
                    <span>{stage.period}</span>
                    <span>{stage.stage}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drill-down Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="stage-detail-panel"
            >
              <div className="detail-panel-header">
                <div>
                  <div className="detail-meta-line">
                    <span className="detail-period"><Calendar size={13} /> {academicStages[selectedStage].period}</span>
                    <span className="detail-badge">{academicStages[selectedStage].stage}</span>
                    <span className="detail-mention">{academicStages[selectedStage].rank}</span>
                  </div>
                  <h4 className="detail-title">{academicStages[selectedStage].year} — {academicStages[selectedStage].summary}</h4>
                </div>
                <div className="detail-grade-box">
                  <span className="d-grade">{academicStages[selectedStage].average}</span>
                  <span className="d-label">{academicStages[selectedStage].rank}</span>
                </div>
              </div>

              <div className="detail-body-grid">
                <div className="detail-skills-col">
                  <h5 className="sub-title"><BookOpen size={14} /> Matières Clés & Concepts Approfondis</h5>
                  <ul className="competency-list">
                    {academicStages[selectedStage].keyPoints.map((pt, i) => (
                      <li key={i}>
                        <ChevronRight size={14} className="list-arrow text-cyan" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-reflection-col">
                  <h5 className="sub-title"><CheckCircle size={14} /> Bilan & Enseignements</h5>
                  <p className="reflection-text">
                    {academicStages[selectedStage].reflection}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
