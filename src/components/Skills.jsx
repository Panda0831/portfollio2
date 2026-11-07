import { motion } from 'framer-motion';

const ease = [0.28, 0.11, 0.32, 1];

const categories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    summary: 'Interfaces web réactives, accessibles et soignées.',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    summary: 'Services robustes, APIs claires et architecture en couches.',
    items: ['Java', 'Spring Boot', 'Hibernate', 'Python', 'Django', 'Node.js / Express', 'PHP', 'Architecture REST / MVC'],
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    summary: 'Applications mobiles connectées à des services existants.',
    items: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    id: 'data',
    label: 'Database & Data Engineering',
    summary: 'Modélisation, requêtes avancées et traitement de données.',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL avancé', 'ETL / Pipelines', 'Traitement de données (Python)', 'Prisma ORM', 'Merise / UML'],
  },
  {
    id: 'devops',
    label: 'DevOps & Outils',
    summary: 'Environnement de développement fiable et collaboration.',
    items: ['Git / GitHub / GitLab', 'Docker', 'Linux', 'Méthode Agile'],
  },
  {
    id: 'engineering',
    label: 'Software Engineering',
    summary: 'Conception, qualité et maintenabilité du code.',
    items: ['Programmation orientée objet', 'Clean Architecture', 'Principes SOLID', 'Modélisation Merise / UML', 'Tests unitaires', 'PySide6'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section apple-section">
      <div className="section-container">
        <div className="apple-section-head">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="apple-eyebrow"
          >
            Compétences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="apple-headline"
          >
            Une base technique complète.
            <br />
            Du modèle de données à l’interface.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="apple-section-intro"
          >
            Compétences construites à travers des projets académiques et personnels : backend, frontend, mobile,
            données et pratiques d’ingénierie logicielle.
          </motion.p>
        </div>

        <div className="skills-apple-grid">
          {categories.map((cat, idx) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease }}
              className="skills-apple-category"
            >
              <div className="skills-apple-category-head">
                <h3>{cat.label}</h3>
                <p>{cat.summary}</p>
              </div>
              <ul className="skills-apple-list" aria-label={cat.label}>
                {cat.items.map((item) => (
                  <li key={item} className="skills-apple-item">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
