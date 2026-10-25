import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import videoSrc from '../assets/MOTION.mp4';

export default function Loader({ onComplete }) {
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = mq => setReducedMotion(mq.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setLoaded(true);
      if (onComplete) onComplete();
      return;
    }
    const video = document.querySelector('#hero-avatar-video');
    if (!video) return;
    video.addEventListener('canplay', () => {
      const duration = video.duration * 1000 - 4000;
      const timer = setTimeout(() => {
        setLoaded(true);
        if (onComplete) onComplete();
      }, duration);
      return () => clearTimeout(timer);
    });
    video.currentTime = 0;
    video.play();
    return () => {
      video.pause();
    };
  }, [reducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 1, exit: { opacity: 0 } }}
      className="loader-overlay"
    >
      <div className="video-frame">
        <div className="corner-accent tl" />
        <div className="corner-accent tr" />
        <div className="corner-accent bl" />
        <div className="corner-accent br" />
        <video
          id="hero-avatar-video"
          src={videoSrc}
          type="video/mp4"
          muted
          playsInline
          loop
          className="hero-avatar-video"
          style={{ display: reducedMotion ? 'none' : 'block' }}
        />
      </div>
      {!reducedMotion && (
        <div className="loader-progress-overlay">
          <div
            className="loader-progress-fill"
            style={{ width: loaded ? '100%' : '0%' }}
          />
        </div>
      )}
      {loaded && (
        <motion.div
          className="loader-complete"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="loader-complete-text"
          >
            Fanamby Manjaka · Fullstack & Data Engineering
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="loader-complete-sub"
          >
            Stage de fin d'études · 30 décembre 2026
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}