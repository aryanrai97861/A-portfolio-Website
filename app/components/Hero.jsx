import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Base text */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white select-none">
            ARYAN KUMAR RAI
          </h1>

          {/* Glitch layers */}
          <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-bold tracking-wider text-[#0ff] opacity-50 glitch-1 select-none">
            ARYAN KUMAR RAI
          </h1>
          <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-bold tracking-wider text-[#f0f] opacity-50 glitch-2 select-none">
            ARYAN KUMAR RAI
          </h1>
        </motion.div>
      </div>

      <style jsx>{`
        .glitch-1 {
          animation: glitch1 2s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        
        .glitch-2 {
          animation: glitch2 3s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }

        @keyframes glitch1 {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch2 {
          0% { transform: translate(0); }
          20% { transform: translate(5px, -5px); }
          40% { transform: translate(5px, 5px); }
          60% { transform: translate(-5px, -5px); }
          80% { transform: translate(-5px, 5px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
