import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import heroPortrait from '../assets/hero.png';

const ease = [0.28, 0.11, 0.32, 1];

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('fanambymanjaka9@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      /* clipboard may be unavailable */
    }
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section apple-hero">
      <div className="section-container">
        <div className="hero-availability">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="availability-pill"
          >
            <span>Disponible pour un stage de fin d’études de 6 mois · dès le 30 décembre 2026</span>
          </motion.div>
        </div>

        <div className="hero-intro">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="hero-eyebrow"
          >
            Fullstack & Data Engineering
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease }}
            className="hero-headline"
          >
            Fanamby
            <br />
            Manjaka.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="hero-subheadline"
          >
            Des logiciels solides. Des expériences utiles.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="hero-description"
          >
            Étudiant en 3e année de Licence Génie Logiciel à l’<strong>ESMIA Innovation</strong>, classé{' '}
            <strong>1er au semestre 4</strong> (15.49/20). Je conçois des backends fiables, des interfaces soignées
            et des pipelines de données — du schéma relationnel jusqu’à l’expérience utilisateur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="hero-actions"
          >
            <button type="button" onClick={() => handleScroll('projects')} className="btn-apple-primary interactive">
              Découvrir les projets
            </button>
            <button type="button" onClick={() => handleScroll('contact')} className="btn-apple-secondary interactive">
              Me contacter <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-apple-text interactive"
              aria-label="Copier l’adresse e-mail"
            >
              {copiedEmail ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
              <span>{copiedEmail ? 'E-mail copié' : 'Copier l’e-mail'}</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="hero-meta-row"
          >
            <span>ESMIA Innovation · Antananarivo</span>
            <span className="hero-meta-sep" aria-hidden="true">·</span>
            <span>1er au S4 — 15.49/20</span>
            <span className="hero-meta-sep" aria-hidden="true">·</span>
            <span>DELF B2 · Python Essentials (en cours) · IBM Z Explorer (en cours)</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-signature"
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          <div className="hero-signature-image-wrap">
            <img
              src={heroPortrait}
              alt="Illustration de couches logicielles assemblées, symbole d’une architecture construite de ses fondations"
              className="hero-signature-image"
              width="343"
              height="361"
              fetchPriority="high"
            />
          </div>
          <div className="hero-signature-caption">
            <span className="hero-signature-index">01 / 03</span>
            <span className="hero-signature-line" aria-hidden="true" />
            <span>Concevoir · Construire · Comprendre</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
