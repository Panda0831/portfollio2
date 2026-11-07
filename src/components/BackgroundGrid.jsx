import { useEffect, useRef } from 'react';

export default function BackgroundGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId = null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const staticMode =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getColor = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return isDark ? 'rgba(245,245,247,' : 'rgba(29,29,31,';
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (staticMode) drawStatic();
    };

    window.addEventListener('resize', handleResize);
    const gridSize = 72;
    let mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35, active: false };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const drawStatic = () => {
      const c = getColor();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = `${c}0.035)`;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
    };

    if (staticMode) {
      drawStatic();
      const obs = new MutationObserver(drawStatic);
      obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      return () => {
        window.removeEventListener('resize', handleResize);
        obs.disconnect();
      };
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let ambientTime = 0;
    let isRunning = false;

    const startLoop = () => {
      if (!isRunning) { isRunning = true; animationFrameId = requestAnimationFrame(render); }
    };
    const stopLoop = () => {
      if (isRunning) { isRunning = false; cancelAnimationFrame(animationFrameId); }
    };
    const handleVisibility = () => {
      if (document.hidden) stopLoop(); else startLoop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      const c = getColor();
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      ambientTime += 0.006;
      const spotlightX = mouse.active ? mouse.x : width * 0.5 + Math.sin(ambientTime) * 100;
      const spotlightY = mouse.active ? mouse.y : height * 0.35 + Math.cos(ambientTime * 0.8) * 70;

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = `${c}0.03)`;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      const spotlightRadius = 320;
      const radialGlow = ctx.createRadialGradient(spotlightX, spotlightY, 0, spotlightX, spotlightY, spotlightRadius);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const accent = isDark ? '41,151,255' : '0,113,227';
      radialGlow.addColorStop(0, `rgba(${accent},0.06)`);
      radialGlow.addColorStop(0.55, `rgba(${accent},0.015)`);
      radialGlow.addColorStop(1, `rgba(${accent},0)`);
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    startLoop();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      stopLoop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-grid-canvas"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
