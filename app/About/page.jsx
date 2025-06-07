"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const fadeIn = (direction = "up", delay = 0) => {
    return {
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
    };
  };

  const sections = [
    {
      title: "Introduction",
      description: "Hey there! I'm Aryan Kumar Rai, an aspiring Software Developer with hands-on experience in building web applications. I'm passionate about writing clean, maintainable code and love working on both frontend and backend parts of web development. My projects reflect a strong understanding of Frontend and Backend Integrations , secure authentications , REST APIs , resposive UI design and AI integration.",
    },
    {
      title: "Technical Skills",
      description: "I uses Full Stack tech like Next.js, Typescript, React.js, Javascript and Tailwind. For Backend I know RestAPI and FastAPI, and I enjoy integrating frontend and backend systems seamlessly. I regularly use tools like Git, Gitlab, Postman, Render, Vercel, github, Cloud services like AWS. I am also skilled in integrating AIs technologies in my projects with Gemini, I'm constantly pushing myself to learn more, explore new technologies, and improve as a developer.",
    },
    {
      title: "Career Goals",
      description: "I'm currently an intern where I am working on a practical product for my company..",
    },
    {
      title: "Outside of Code",
      description: "When I'm not coding, you'll probably find me diving into light novels, watching Netflix or anime, or enjoying intense PlayStation gaming sessions. I believe creativity, curiosity, and consistency make the best developers—and I'm always bringing those into everything I do.",
    },
  ];

  return (
    <motion.main
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center m-10"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        className="text-center transform transition-all duration-700 hover:scale-105"
      >
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 
          text-transparent bg-clip-text
          inline-block py-2 px-6 rounded-lg
          shadow-lg hover:shadow-red-500/30
          transition-all duration-500
          animate-[pulse_3s_ease-in-out_infinite]"
          >
          About me
        </h2>
        <div
          className="h-1 w-24 bg-red-600 mx-auto mt-4 
          transition-all duration-500 hover:w-32"
          ></div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", 0.5)}
        className="mt-16 w-full max-w-4xl"
      >
        <div className="grid grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.6 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Page;