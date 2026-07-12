import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Briefcase, Code, Star, Users } from 'lucide-react';

const stats = [
  { id: 1, icon: <Briefcase className="stat-icon text-purple" />, value: 50, label: 'Projets Réalisés', suffix: '+' },
  { id: 2, icon: <Code className="stat-icon text-cyan" />, value: 5, label: 'Années d\'Expérience', suffix: '+' },
  { id: 3, icon: <Star className="stat-icon text-emerald" />, value: 98, label: 'Satisfaction Client', suffix: '%' },
  { id: 4, icon: <Users className="stat-icon text-purple" />, value: 30, label: 'Clients Satisfaits', suffix: '+' }
];

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Statistics() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="statistics" className="statistics-section">
      <div className="section-header">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-tag"
        >
          Statistiques
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Mes Réalisations en Chiffres
        </motion.h2>
        <div className="section-line" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="stats-grid"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="stat-card glass-panel interactive"
          >
            <div className="stat-icon-wrapper">
              {stat.icon}
            </div>
            <div className="stat-value">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="stat-label">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}