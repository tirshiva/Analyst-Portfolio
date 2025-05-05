import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const NeuralBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const nodesRef = useRef([]);
  const linesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create nodes
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x007AFF,
      transparent: true,
      opacity: 0.8
    });

    for (let i = 0; i < 50; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      node.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005
      );
      scene.add(node);
      nodes.push(node);
    }
    nodesRef.current = nodes;

    // Create lines
    const lines = [];
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x007AFF,
      transparent: true,
      opacity: 0.2
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const lineGeometry = new THREE.BufferGeometry();
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
        lines.push({ line, start: nodes[i], end: nodes[j] });
      }
    }
    linesRef.current = lines;

    // Mouse movement handler with enhanced sensitivity
    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update nodes
      nodesRef.current.forEach(node => {
        // Move nodes with reduced speed
        node.position.add(node.velocity);

        // Bounce off walls with reduced speed
        if (Math.abs(node.position.x) > 5) {
          node.velocity.x *= -0.8; // Added damping
          node.position.x = Math.sign(node.position.x) * 5;
        }
        if (Math.abs(node.position.y) > 5) {
          node.velocity.y *= -0.8; // Added damping
          node.position.y = Math.sign(node.position.y) * 5;
        }
        if (Math.abs(node.position.z) > 5) {
          node.velocity.z *= -0.8; // Added damping
          node.position.z = Math.sign(node.position.z) * 5;
        }

        // Enhanced mouse interaction
        const distanceToMouse = Math.sqrt(
          Math.pow(node.position.x - mouseRef.current.x * 5, 2) +
          Math.pow(node.position.y - mouseRef.current.y * 5, 2)
        );

        if (distanceToMouse < 3) { // Increased interaction radius
          const force = new THREE.Vector3(
            node.position.x - mouseRef.current.x * 5,
            node.position.y - mouseRef.current.y * 5,
            0
          ).normalize().multiplyScalar(0.02 * (1 - distanceToMouse / 3)); // Variable force based on distance
          node.velocity.add(force);
          
          // Add slight z-axis movement for more depth
          node.velocity.z += (Math.random() - 0.5) * 0.01;
        }

        // Add slight random movement for more organic feel
        node.velocity.add(new THREE.Vector3(
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001
        ));

        // Limit maximum velocity
        const maxSpeed = 0.02;
        if (node.velocity.length() > maxSpeed) {
          node.velocity.normalize().multiplyScalar(maxSpeed);
        }
      });

      // Update lines with enhanced connection logic
      linesRef.current.forEach(({ line, start, end }) => {
        const distance = start.position.distanceTo(end.position);
        if (distance < 2.5) { // Increased connection distance
          const positions = new Float32Array([
            start.position.x, start.position.y, start.position.z,
            end.position.x, end.position.y, end.position.z
          ]);
          line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          line.material.opacity = 0.2 * (1 - distance / 2.5);
          line.visible = true;
        } else {
          line.visible = false;
        }
      });

      rendererRef.current.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.domElement);
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
      });
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default NeuralBackground; 