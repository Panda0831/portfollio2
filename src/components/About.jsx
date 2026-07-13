import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    date: '2024 - Présent',
    title: 'Licence 3 — Génie logiciel et IA',
    company: 'ESMIA Innovations',
    desc: 'Formation en développement web et mobile, programmation, bases de données, conception de systèmes et intelligence artificielle.'
  },
  {
    type: 'education',
    date: 'En cours',
    title: 'Formation IBM Z Xplore',
    company: 'IBM',
    desc: 'Formation en cours autour de l’écosystème IBM Z.'
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          01. Mon Histoire
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          À Propos De Moi
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* Left Column: Description & Strengths */}
        <div className="about-info">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            Étudiant en troisième année en génie logiciel et IA à ESMIA Innovations depuis 2024, je me forme au développement full-stack, aux bases de données et au développement mobile. J'aime apprendre en construisant des projets concrets.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-text"
          >
            Je travaille avec Python et Java, ainsi qu'avec React, PHP/Laravel et Symfony. Je développe aussi des interfaces en HTML, CSS et JavaScript, et j'étudie le machine learning, UML, Merise et la conception de systèmes.
          </motion.p>

          <div className="values-grid">
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="value-card glass-panel interactive"
            >
              <Award className="value-icon text-cyan" />
              <h3>Apprentissage continu</h3>
              <p>Je consolide mes compétences à travers des projets personnels et académiques.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="value-card glass-panel interactive"
            >
              <Briefcase className="value-icon text-purple" />
              <h3>Développement polyvalent</h3>
              <p>Web, API, bases de données et applications mobiles font partie de mon parcours.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="value-card glass-panel interactive"
            >
              <Award className="value-icon text-cyan" />
              <h3>Certifications</h3>
              <p>Cisco Python Essentials 1 et Python Essentials 2.</p>
            </motion.div>
          </div>

          <div className="interests-block">
            <h3>Domaines d’intérêt</h3>
            <div className="interest-tags">
              <span>Génie logiciel</span>
              <span>Intelligence artificielle</span>
              <span>Architecture logicielle</span>
              <span>Web & mobile</span>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Experience */}
        <div className="about-timeline">
          <h3 className="timeline-section-title">Parcours</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="timeline-container"
          >
            <div className="timeline-line" />
            {timelineData.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="timeline-icon-box">
                  {item.type === 'work' ? (
                    <Briefcase size={16} className="timeline-icon text-purple" />
                  ) : (
                    <GraduationCap size={16} className="timeline-icon text-cyan" />
                  )}
                </div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-meta">
                    <span className="timeline-date"><Calendar size={12} /> {item.date}</span>
                    <span className="timeline-company">{item.company}</span>
                  </div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
