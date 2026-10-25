import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktops/laptops with mouse/trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      setIsTyping(Boolean(isInput));

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('.tech-pill') ||
        target.closest('.filter-btn') ||
        target.closest('.project-card') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(Boolean(isInteractive) && !isInput);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible || isTyping) return null;

  const ringRadius = isHovering ? 26 : 14;

  return (
    <AnimatePresence>
      <motion.div
        className="custom-cursor-aura"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          x: position.x - ringRadius,
          y: position.y - ringRadius,
          width: ringRadius * 2,
          height: ringRadius * 2,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovering ? 'rgba(14, 116, 144, 0.6)' : 'rgba(28, 25, 23, 0.22)',
          backgroundColor: isHovering ? 'rgba(14, 116, 144, 0.07)' : 'rgba(14, 116, 144, 0.02)',
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 26,
          mass: 0.22,
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          borderRadius: '50%',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          backdropFilter: isHovering ? 'blur(1px)' : 'none',
          zIndex: 9999,
        }}
      />
    </AnimatePresence>
  );
}
