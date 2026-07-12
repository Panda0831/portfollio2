import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    type: 'work',
    date: '2024 - Présent',
    title: 'Développeur Frontend & Creative Freelance',
    company: 'Indépendant',
    desc: 'Création d\'expériences immersives 3D, intégration d\'animations riches (Framer Motion, GSAP) et optimisation des performances de sites web vitrines haut de gamme.'
  },
  {
    type: 'work',
    date: '2022 - 2024',
    title: 'Lead Frontend Developer',
    company: 'Pixel Studio',
    desc: 'Encadrement d\'une équipe de 4 développeurs, mise en place d\'architectures React/Next.js modulaires et collaboration étroite avec l\'équipe design UI/UX.'
  },
  {
    type: 'education',
    date: '2020 - 2022',
    title: 'Master Direction Artistique & Tech',
    company: 'Gobelins, L\'École de l\'Image',
    desc: 'Spécialisation dans les technologies web créatives, le design interactif, l\'ergonomie mobile et le prototypage d\'interfaces avancées.'
  },
  {
    type: 'education',
    date: '2017 - 2020',
    title: 'Licence Informatique et Multimédia',
    company: 'Université de Lyon',
    desc: 'Apprentissage des bases algorithmiques, du développement logiciel, des bases de données et de l\'intégration web standard.'
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
            Passionné par l'intersection entre le **code propre** et le **design interactif**, je développe des sites web à forte valeur ajoutée visuelle. Mon but est de transformer des idées conceptuelles en produits numériques fluides et captivants.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-text"
          >
            Je ne me contente pas d'intégrer des maquettes : je leur insuffle du mouvement, du rythme et de la réactivité pour créer des souvenirs utilisateurs marquants, tout en respectant l'accessibilité et le SEO.
          </motion.p>

          <div className="values-grid">
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="value-card glass-panel interactive"
            >
              <Award className="value-icon text-cyan" />
              <h3>Qualité Pixels</h3>
              <p>Chaque transition et micro-interaction est peaufinée avec précision.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              className="value-card glass-panel interactive"
            >
              <Briefcase className="value-icon text-purple" />
              <h3>Orienté Performance</h3>
              <p>Animations ultra-fluides à 60fps sans surcharger le navigateur.</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Timeline Experience */}
        <div className="about-timeline">
          <h3 className="timeline-section-title">Parcours & Expérience</h3>
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
