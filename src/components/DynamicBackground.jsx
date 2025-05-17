import { useEffect, useRef } from 'react';

const DynamicBackground = ({ section }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let connections = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles with different patterns based on section
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = getParticleColor();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const getParticleColor = () => {
      const colors = {
        home: 'rgba(100, 255, 218, 0.5)',
        projects: 'rgba(255, 100, 218, 0.5)',
        about: 'rgba(100, 218, 255, 0.5)',
        experience: 'rgba(218, 100, 255, 0.5)'
      };
      return colors[section] || 'rgba(100, 255, 218, 0.5)';
    };

    const getConnectionColor = () => {
      const colors = {
        home: 'rgba(100, 255, 218, 0.2)',
        projects: 'rgba(255, 100, 218, 0.2)',
        about: 'rgba(100, 218, 255, 0.2)',
        experience: 'rgba(218, 100, 255, 0.2)'
      };
      return colors[section] || 'rgba(100, 255, 218, 0.2)';
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Draw connections between nearby particles
    const drawConnections = () => {
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = getConnectionColor();
            ctx.lineWidth = 0.5;
            ctx.stroke();
            connections.push({ i, j, opacity });
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      // drawConnections(); // <-- Remove or comment out this line

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [section]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-5"
      style={{ zIndex: 0 }}
    />
  );
};

export default DynamicBackground;