import { useEffect, useRef } from 'react';

const DynamicHeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw 3 animated waves
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        for (let i = 0; i <= canvas.width; i += 2) {
          const amplitude = 24 + j * 12;
          const y =
            Math.sin((i / 220) + t * (0.7 + j * 0.2)) * amplitude +
            canvas.height * (0.5 + j * 0.12);
          if (i === 0) ctx.moveTo(i, y);
          else ctx.lineTo(i, y);
        }
        ctx.strokeStyle = [
          'rgba(0,113,227,0.13)',
          'rgba(134,134,139,0.10)',
          'rgba(0,113,227,0.07)'
        ][j];
        ctx.lineWidth = 3 + j * 2;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 16 - j * 4;
        ctx.stroke();
      }
    }

    function animate() {
      t += 0.012;
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default DynamicHeroBackground; 