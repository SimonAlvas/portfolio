"use client";

import { useEffect, useRef } from "react";

// Interface for a Star object
interface Star {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
}

const StarCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stars: Star[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Create random stars
    const createStars = () => {
      const numberOfStars = 100;
      for (let i = 0; i < numberOfStars; i++) {
        const radius = Math.random() * 2 + 1; // random radius between 1 and 3
        const x = Math.random() * width;
        const y = Math.random() * height;
        const speedX = Math.random() * 0.5 - 0.25; // random horizontal speed
        const speedY = Math.random() * 0.5 - 0.25; // random vertical speed

        stars.push({ x, y, radius, speedX, speedY });
      }
    };

    // Draw stars on canvas
    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });
    };

    // Update star positions
    const updateStars = () => {
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        // Reset star position when it goes off-screen
        if (star.x > width) star.x = 0;
        if (star.x < 0) star.x = width;
        if (star.y > height) star.y = 0;
        if (star.y < 0) star.y = height;
      });
    };

    // Animation loop
    const animate = () => {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    };

    createStars();
    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ zIndex: 0 }} className="z-0" />;
};

export default StarCanvas;
