import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.28, 0.11, 0.32, 1];

function Stat({ value, suffix = '', label, note }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = parseFloat(value);
    if (reduce || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    const isDecimal = String(value).includes('.');
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      setDisplay(isDecimal ? current.toFixed(2) : Math.round(current).toString());
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="about-stat">
      <div className="about-stat-value">
        {display}
        {suffix}
      </div>
      <div className="about-stat-label">{label}</div>
      {note ? <div className="about-stat-note">{note}</div> : null}
    </div>
  );
}

const credentials = [
  {
    title: 'Certification DELF B2',
    issuer: 'Ministère français de l’Éducation nationale',
    meta: 'Obtenu · octobre 2026',
    desc: 'Niveau B2 validé officiellement : rédaction technique et échanges professionnels en français.',
  },
  {
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy & OpenEDG Python Institute',
    meta: 'En cours',
    desc: 'Programmation orientée objet, modules, structures de données, exceptions et manipulation de fichiers.',
  },
  {
    title: 'IBM Z Explorer',
    issuer: 'IBM',
    meta: 'En cours',
    desc: 'Initiation aux systèmes d’entreprise : disponibilité, intégrité transactionnelle et données critiques.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section apple-section">
      <div className="section-container">
        <div className="apple-section-head">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="apple-eyebrow"
          >
            Profil
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="apple-headline"
          >
            Comprendre les fondations.
            <br />
            Construire des logiciels solides.
          </motion.h2>
        </div>

        <div className="about-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="about-narrative"
          >
            <p className="about-lead">
              Étudiant en 3e année de Licence Génie Logiciel à l’<strong>ESMIA Innovation</strong> (Antanimena),
              classé <strong>1er au semestre 4</strong> avec 15.49/20.
            </p>
            <p>
              Je m’intéresse au développement fullstack et au Data Engineering. Plutôt que d’utiliser les outils comme
              des boîtes noires, je cherche à comprendre leurs mécanismes internes.
            </p>
            <p>
              Cette approche m’a conduit à développer un <strong>registre blockchain décentralisé</strong> : noyau
              Python from scratch (SHA-256, preuve de travail, détection d’altérations), exposé via Django, React et
              une application mobile Expo.
            </p>
            <p>
              Pour mon stage de fin d’études de <strong>6 mois</strong> à partir du <strong>30 décembre 2026</strong>,
              je souhaite rejoindre une équipe technique exigeante en backend, fullstack ou data.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="about-aside"
          >
            <div className="about-stats">
              <Stat value="15.49" suffix="/20" label="Moyenne" note="Semestre 4" />
              <Stat value="1" suffix="er" label="Classement" note="Promotion, semestre 4" />
              <Stat value="3.04" suffix=" pts" label="Progression" note="De 12.45 (S1) à 15.49 (S4)" />
              <Stat value="6" suffix=" mois" label="Stage recherché" note="À partir du 30 déc. 2026" />
            </div>
            <div className="about-focus glass-panel">
              <p className="about-focus-kicker">Méthode de travail</p>
              <ul>
                <li><strong>Modéliser avant de coder.</strong> Entités, schémas relationnels et contrats d’API clairs.</li>
                <li><strong>Structurer et tester.</strong> Responsabilités séparées, principes SOLID et tests utiles.</li>
                <li><strong>Communiquer avec précision.</strong> Documentation technique et collaboration en équipe.</li>
              </ul>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="about-credentials"
        >
          <p className="about-credentials-kicker">Certifications & formations complémentaires</p>
          <div className="about-credentials-grid">
            {credentials.map((cred) => (
              <article key={cred.title} className="about-credential">
                <div className="about-credential-meta">{cred.meta}</div>
                <h3>{cred.title}</h3>
                <p className="about-credential-issuer">{cred.issuer}</p>
                <p className="about-credential-desc">{cred.desc}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
