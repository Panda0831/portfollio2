import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import motionVideo from '../assets/fanamby_motion.mp4';

const FALLBACK_MS = 2400;

export default function Loader({ onComplete }) {
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setDone(true);
  };

  useEffect(() => {
    const timer = window.setTimeout(finish, FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Chargement"
          role="status"
        >
          <motion.div
            className="loader-video-shell"
            initial={{ opacity: 0, y: 22, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="video-frame loader-video-frame">
              <motion.div
                className="loader-video-reveal"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
              <video
                src={motionVideo}
                autoPlay
                muted
                playsInline
                preload="metadata"
                onEnded={finish}
                onError={finish}
                className="loader-video"
              />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
