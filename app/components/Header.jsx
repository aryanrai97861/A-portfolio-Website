"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderBackground from "./HeaderBackground";

const navLinks = [
  {
    name: "Extracurricular Activities",
    icon: "/skills.png",
    path: "/Extracurricular",
  },
  { name: "Education", icon: "/Education.png", path: "/Education" },
  { name: "Contact Me", icon: "/Contact.svg", path: "/Contact" },
  { name: "About", icon: "/about.svg", path: "/About" },
];

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
    <header
      className={`sticky top-0 z-50 relative overflow-hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <HeaderBackground />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between py-4">
        {/* Logo/Name Section */}
        <div className="flex items-center mb-4 md:mb-0">
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
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
          {navLinks.map((item) => {
            let gradient = 'bg-gradient-to-r from-orange-500 to-yellow-400';
            let underline = 'bg-gradient-to-r from-orange-500 to-yellow-400';
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`group flex flex-col items-center gap-1 px-2 py-1 rounded transition-colors`}
              >
                <span className={`font-semibold text-base md:text-lg bg-clip-text text-transparent ${gradient} transition-all duration-300`}>{item.name}
                  <span 
                    className={`block h-0.5 mt-1 rounded-full ${underline} transition-all duration-500 group-hover:w-full w-0`} 
                    style={{animation: 'nav-underline 3s ease-in-out infinite'}}
                  ></span>
                </span>
              </Link>
            );
          })}
        </nav>
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
    </header>
  );
};

export default Header;