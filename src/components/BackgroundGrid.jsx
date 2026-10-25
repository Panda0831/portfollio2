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

    // Mode statique : tactile (pas de spotlight utile) ou mouvement réduit demandé
    const staticMode =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (staticMode) drawStatic();
    };

    window.addEventListener('resize', handleResize);

    const gridSize = 64;
    let mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35, active: false };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // Rendu statique : grille discrète uniquement, aucun rAF
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.035)';
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
    };

    if (staticMode) {
      drawStatic();
      return () => window.removeEventListener('resize', handleResize);
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let ambientTime = 0;
    let isRunning = false;

    // Pause quand l'onglet n'est pas visible : zéro travail inutile
    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };
    const stopLoop = () => {
      if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      }
    };
    const handleVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ambientTime += 0.008;
      // Gentle ambient center if mouse is inactive
      const spotlightX = mouse.active ? mouse.x : width * 0.5 + Math.sin(ambientTime) * 120;
      const spotlightY = mouse.active ? mouse.y : height * 0.35 + Math.cos(ambientTime * 0.8) * 80;

      // Grille de repérage discrète, en touche de papier
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.04)';

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Spotlight interactif : aperçu lumineux discret autour du curseur
      const spotlightRadius = 340;
      const radialGlow = ctx.createRadialGradient(
        spotlightX,
        spotlightY,
        0,
        spotlightX,
        spotlightY,
        spotlightRadius
      );
      radialGlow.addColorStop(0, 'rgba(14, 116, 144, 0.09)');
      radialGlow.addColorStop(0.5, 'rgba(14, 116, 144, 0.02)');
      radialGlow.addColorStop(1, 'rgba(14, 116, 144, 0)');

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Croix de repérage « + » éclairées par la proximité du curseur
      const crossSpacing = gridSize * 2;
      for (let x = crossSpacing; x < width; x += crossSpacing) {
        for (let y = crossSpacing; y < height; y += crossSpacing) {
          const dx = x - spotlightX;
          const dy = y - spotlightY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let alpha = 0.1;
          if (dist < spotlightRadius) {
            alpha += (1 - dist / spotlightRadius) * 0.35;
          }

          ctx.fillStyle = `rgba(14, 116, 144, ${alpha})`;
          const crossSize = 3;
          ctx.fillRect(x - crossSize, y - 0.5, crossSize * 2, 1);
          ctx.fillRect(x - 0.5, y - crossSize, 1, crossSize * 2);
        }
      }

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.95
      }}
    />
  );
}
