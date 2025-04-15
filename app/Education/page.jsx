"use client";
import React, { useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const Page = () => {
  const experiences = [
    {
      role: "Bachelor of Technology in Computer Science",
      company: "Raj Kumar Goel Institute of Technology",
      tech: "Data Structures, Algorithms, DBMS, OS, Computer Networks",
      description: [
        "📚 Relevant Coursework: Machine Learning, Web Development, Cloud Computing",
        "🎯 Final Year Project: ",
      ],
      date: "2022 - 2026",
      bgColor: "bg-purple-600",
      type: "education",
    },
    {
      role: "Senior Secondary (XII), CBSE",
      company: "BBL Public School",
      tech: "Percentage - 74%",
      description: [],
      date: "2022",
      bgColor: "bg-blue-500",
      type: "education",
    },
    {
      role: "Secondary (X), CBSE",
      company: "BBL Public School",
      tech: "Percentage - 84%",
      description: [],
      date: "2020",
      bgColor: "bg-gray-100",
      type: "education",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col items-center m-10">
      <div className="text-center transform transition-all duration-700 hover:scale-105">
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 
                 text-transparent bg-clip-text
                 inline-block py-2 px-6 rounded-lg
                 shadow-lg hover:shadow-red-500/30
                 transition-all duration-500
                 animate-[pulse_3s_ease-in-out_infinite]"
        >
          Education 
        </h2>
        <div
          className="h-1 w-24 bg-red-600 mx-auto mt-4 
                  transition-all duration-500 hover:w-32"
        ></div>
      </div>

      <div className="w-full max-w-4xl mt-16" ref={ref}>
        <div className="relative border-l-4 border-white pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: idx * 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <div
                className={`absolute -left-10 top-1.5 rounded-full p-2 bg-amber-500 group-hover:scale-110 transition-transform duration-300`}
              >
                <FaGraduationCap size={20} color="white" />
              </div>

              <motion.div
                className={`rounded-lg p-6 shadow-lg ${exp.bgColor} ${
                  exp.bgColor === "bg-gray-100" ? "text-black" : "text-white"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="mt-1 font-semibold">{exp.company}</p>
                <p className="mt-2 text-sm">🛠️ {exp.tech}</p>
                {exp.description.length > 0 && (
                  <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                {exp.date && (
                  <p className="mt-4 text-sm font-semibold">{exp.date}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;