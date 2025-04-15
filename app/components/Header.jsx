"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1f1e1e] shadow-md">
      {/* Main Header Content */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name Section */}
          <div className="flex items-center">
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

          {/* Mobile Menu Button and Profile */}
          <div className="flex items-center gap-2">
            <button onClick={toggleSidebar} className="p-2">
              <Image
                src="/menu.svg"
                alt="Menu"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity"
              />
            </button>
            <Link href="/">
              <Image
                src="/Smiley.png"
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Mobile Sidebar - Keeping your original style */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-neutral-900 shadow-lg z-50 p-6 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-amber-100">Aryan Kumar Rai</h2>
          <button
            onClick={toggleSidebar}
            className="text-2xl text-gray-300 hover:text-white"
          >
            &times;
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-6">
            {[
              {
                name: "Extracurricular Activities",
                icon: "/skills.png",
                path: "/Extracurricular",
              },
              { name: "Education", icon: "/Education.png", path: "/Education" },
              { name: "Contact Me", icon: "/Contact.svg", path: "/Contact" },
              { name: "About", icon: "/about.svg", path: "/About" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="flex items-center gap-4 p-3 text-gray-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={toggleSidebar}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                  <span className="text-lg">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <style jsx>{`
        @keyframes underline {
          0%, 100% { width: 0; left: 0; }
          50% { width: 100%; left: 0; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </header>
  );
};

export default Header;