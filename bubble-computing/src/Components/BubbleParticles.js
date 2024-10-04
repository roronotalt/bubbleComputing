import React, { useEffect, useRef } from "react";

const BubbleParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = [];
    const numInitialBubbles = 4;
    const minBubbleSize = 15;
    const maxBubbleSize = 40;

    // Array of possible bubble colors
    const bubbleColors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA07A",
      "#98D8C8",
      "#F67280",
      "#C06C84",
      "#6C5B7B",
      "#7FDBFF",
      "#2ECC40",
      "#FFDC00",
      "#FF851B",
      "#B10DC9",
      "#85144b",
      "#39CCCC",
      "#01FF70",
    ];

    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size =
          Math.random() * (maxBubbleSize - minBubbleSize) + minBubbleSize;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.color =
          bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < 0 - this.size) {
          this.y = canvas.height + this.size;
        }
        if (this.x < 0 - this.size || this.x > canvas.width + this.size) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x - this.size * 0.3,
          this.y - this.size * 0.3,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.3, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add a slight white reflection
        ctx.beginPath();
        const reflectionGradient = ctx.createRadialGradient(
          this.x - this.size * 0.5,
          this.y - this.size * 0.5,
          0,
          this.x - this.size * 0.5,
          this.y - this.size * 0.5,
          this.size * 0.5
        );
        reflectionGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        reflectionGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = reflectionGradient;
        ctx.arc(
          this.x - this.size * 0.25,
          this.y - this.size * 0.25,
          this.size * 0.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < numInitialBubbles; i++) {
      bubbles.push(new Bubble());
    }

    function addNewBubble() {
      if (bubbles.length < 50) {
        // Limit total number of bubbles
        bubbles.push(new Bubble());
      }
    }

    // Set up timer to add new bubbles
    const bubbleInterval = setInterval(addNewBubble, 2000); // Add a new bubble every 2 seconds

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(bubbleInterval); // Clear the interval when component unmounts
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        cursor: "not-allowed",
        pointerEvents: "none",
      }}
    />
  );
};

export default BubbleParticles;
