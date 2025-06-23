import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative py-12">
      <div className="mb-6">
        <Image
          src="/file.svg"
          alt="Profile Photo"
          width={120}
          height={120}
          className="rounded-full border-4 border-red-600 shadow-lg"
        />
      </div>
      <div className="relative text-center">
  <div className="relative">
    {/* Greeting text */}
    <p className="text-5xl md:text-7xl font-light italic tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent select-none mb-2 font-sans hero-fade-down">
      Hi, I am
    </p>
    
    {/* Base text */}
    <h1 className="text-5xl md:text-7xl font-bold italic tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent select-none font-sans hero-drop-bounce">
      ARYAN KUMAR RAI
    </h1>
  </div>
  <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-sans hero-fade-up">
    Full Stack Software Developer | AI Enthusiast<br/>
    DevOps | Building modern web apps<br/>
    Passionate about clean code, automation, and creative problem-solving.
  </p>
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
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(5px, -5px);
          }
          40% {
            transform: translate(5px, 5px);
          }
          60% {
            transform: translate(-5px, -5px);
          }
          80% {
            transform: translate(-5px, 5px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
