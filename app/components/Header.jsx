"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Extracurricular Activities",
    path: "/Extracurricular",
  },
  { name: "Experience", path: "/Experience" },
  { name: "Contact Me", path: "/Contact" },
  { name: "About", path: "/About" },
];

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  },
});

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      variants={fadeIn("down")}
      initial="hidden"
      animate="show"
      className={`top-0 z-50 relative overflow-hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between py-4">
        {/* Logo/Name Section */}
        <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          className="flex items-center mb-4 md:mb-0"
        >
          <Link href="/" className="group relative">
            <span className="font-extrabold text-2xl md:text-3xl tracking-wider relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
              Aryan Kumar Rai
              <span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-700 to-black"
                style={{
                  animation: "underline 3s ease-in-out infinite",
                  width: "0%"
                }}
              ></span>
            </span>
            <div
              className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-black/5 rounded-lg blur"
              style={{
                animation: "glow 4s ease-in-out infinite",
                opacity: "0.3"
              }}
            ></div>
          </Link>
        </motion.div>
        {/* Navigation Links */}
        <motion.nav 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 md:gap-8 items-center justify-center"
        >
          {navLinks.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeIn("left", 0.1 * (index + 1))}
            >
              <Link
                href={item.path}
                className={`group flex flex-col items-center gap-1 px-2 py-1 rounded transition-colors`}
              >
                <span className="text-xl md:text-xl text-amber-600 group-hover:text-amber-600 transition-colors duration-300 relative">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
      <style jsx>{`
        @keyframes underline {
          0%, 100% { width: 0; left: 0; }
          50% { width: 100%; left: 0; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes nav-underline {
          0%, 100% { width: 0; left: 0; }
          50% { width: 100%; left: 0; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;