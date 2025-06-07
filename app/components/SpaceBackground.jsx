import { useRef, useEffect, useState } from 'react';

export default function MatrixRainBackground() {
  const canvasRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dimensions.width || !dimensions.height) return;

    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Matrix characters - mix of katakana, numbers, and symbols
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store the y position and active state of each column
    const drops = [];
    const active = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = -Math.random() * 100; // Start above screen
      active[i] = false; // Initially inactive
    }

    let animationId;
    let burstTimer = 0;
    const burstInterval = 120; // Frames between bursts
    const burstSize = Math.floor(columns * 0.3); // 30% of columns per burst

    const draw = () => {
      // Black background with slight transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#20232A'; // Matrix text
      ctx.font = `${fontSize}px monospace`;

      // Trigger burst
      burstTimer++;
      if (burstTimer >= burstInterval) {
        burstTimer = 0;
        
        // Activate random columns for burst
        const inactiveColumns = [];
        for (let i = 0; i < columns; i++) {
          if (!active[i]) {
            inactiveColumns.push(i);
          }
        }
        
        // Randomly select columns to activate
        for (let i = 0; i < Math.min(burstSize, inactiveColumns.length); i++) {
          const randomIndex = Math.floor(Math.random() * inactiveColumns.length);
          const columnIndex = inactiveColumns.splice(randomIndex, 1)[0];
          active[columnIndex] = true;
          drops[columnIndex] = -Math.random() * 50; // Start slightly above screen
        }
      }

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        if (active[i]) {
          // Random character
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          
          // Only draw if drop is visible on screen
          if (drops[i] > 0) {
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          }

          // Move drop down
          drops[i] += 0.1;
          
          // Deactivate drop when it goes off screen
          if (drops[i] * fontSize > canvas.height + 100) {
            active[i] = false;
            drops[i] = -Math.random() * 100;
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}