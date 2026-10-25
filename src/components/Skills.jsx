import { motion } from 'framer-motion';
import { Code2, Server, MonitorSmartphone, Database, Workflow } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Langages',
    icon: <Code2 size={20} className="text-cyan" />,
    count: '6 langages',
    meta: 'Base de l\'ingénierie logicielle : du backend Java aux scripts Python.',
    skills: [
      { name: 'Java', level: 'Maîtrisé' },
      { name: 'Python', level: 'Avancé' },
      { name: 'TypeScript', level: 'Solide' },
      { name: 'JavaScript', level: 'Avancé' },
      { name: 'PHP', level: 'Solide' },
      { name: 'SQL', level: 'Avancé' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    icon: <Server size={20} className="text-cyan" />,
    count: '6 technologies',
    meta: 'Conception de services robustes, architecturés et testables.',
    skills: [
      { name: 'Spring Boot', level: 'Avancé' },
      { name: 'Node.js / Express', level: 'Solide' },
      { name: 'Django', level: 'Solide' },
      { name: 'Hibernate', level: 'Solide' },
      { name: 'Prisma', level: 'Solide' },
      { name: 'Architecture REST / MVC', level: 'Avancé' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    icon: <MonitorSmartphone size={20} className="text-cyan" />,
    count: '6 technologies',
    meta: 'Interfaces web et mobiles fluides, accessibles et maintenables.',
    skills: [
      { name: 'React', level: 'Avancé' },
      { name: 'React Native / Expo', level: 'Solide' },
      { name: 'Tailwind CSS', level: 'Avancé' },
      { name: 'HTML5 & CSS3', level: 'Avancé' },
      { name: 'PySide6', level: 'Opérationnel' }
    ]
  },
  {
    id: 'data',
    title: 'Data Engineering',
    icon: <Database size={20} className="text-cyan" />,
    count: '7 technologies',
    meta: 'Pipelines, requêtes avancées et traitement de données applicatifs.',
    skills: [
      { name: 'ETL / Pipelines', level: 'Solide' },
      { name: 'SQL avancé', level: 'Avancé' },
      { name: 'PostgreSQL', level: 'Avancé' },
      { name: 'MySQL', level: 'Solide' },
      { name: 'SQLite', level: 'Opérationnel' },
      { name: 'Traitement de données (Python)', level: 'Solide' },
      { name: 'Modélisation (Merise / UML)', level: 'Avancé' }
    ]
  },
  {
    id: 'tools',
    title: 'Outils & Méthodes',
    icon: <Workflow size={20} className="text-cyan" />,
    count: '7 outils',
    meta: "L'écosystème d'ingénierie : versioning, conteneurisation, méthodologie.",
    skills: [
      { name: 'Git / GitHub / GitLab', level: 'Avancé' },
      { name: 'Docker', level: 'Opérationnel' },
      { name: 'Linux', level: 'Solide' },
      { name: 'UML', level: 'Avancé' },
      { name: 'Merise', level: 'Avancé' },
      { name: 'Architecture MVC / REST', level: 'Avancé' },
      { name: 'POO', level: 'Avancé' },
      { name: 'Méthode Agile', level: 'Opérationnel' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-head-editorial">
          <div className="section-kicker">
            <span className="kicker-num">04</span>
            <span className="kicker-title">Boîte à outils technique</span>
          </div>
          <h2 className="section-main-title">
            Un socle technique complet : backend, frontend, données et méthodes.
          </h2>
          <p className="section-lead-desc">
            Bâtie à travers des projets académiques et personnels : du backend
            (Spring Boot, Django, Express) au Data Engineering (ETL, SQL avancé), en passant
            par les interfaces React et mobiles Expo.
          </p>
        </div>

        {/* Category Grid */}
        <div className="skills-categories-layout">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="skill-category glass-panel interactive"
            >
              <div className="cat-header">
                <div className="cat-icon-box">{cat.icon}</div>
                <div className="cat-head-info">
                  <h3 className="cat-name">{cat.title}</h3>
                  <p className="cat-meta">{cat.meta}</p>
                </div>
                <span className="cat-count-tag">{cat.count}</span>
              </div>

              <div className="cat-skills-grid">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-chip">
                    <div className="skill-chip-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level level-${skill.level.replace(/[^a-z]/g, '')}`}>{skill.level}</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(i + 1) / (cat.skills.length + 1) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Action Button - Bottom Right */}
      <div className="fab-button">
        <motion.a
          href="#profil"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fab-svg"
          >
            <path d="M5 12h8L12 5l7 7-7 7-5-5z" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}