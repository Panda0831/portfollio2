import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
      setIsTyping(Boolean(isInput));
      const isInteractive =
        target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') ||
        target.closest('.interactive') || target.closest('.tech-pill') || target.closest('.project-card') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(Boolean(isInteractive) && !isInput);
    };
    const handleMouseLeave = () => setIsVisible(false);

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
  const ringRadius = isHovering ? 22 : 12;
  const isDark = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';
  const accent = isDark ? '41,151,255' : '0,113,227';
  const base = isDark ? '245,245,247' : '29,29,31';

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
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovering ? `rgba(${accent},0.55)` : `rgba(${base},0.18)`,
          backgroundColor: isHovering ? `rgba(${accent},0.06)` : 'transparent',
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', borderRadius: '50%', borderWidth: '1.5px', borderStyle: 'solid', zIndex: 9999 }}
      />
    </AnimatePresence>
  );
}
