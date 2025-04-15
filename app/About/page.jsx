import React from "react";

const Page = () => {
  const sections = [
    {
      title: "Introduction",
      description: "Hey there! I'm Aryan Kumar Rai, an aspiring Full Stack Developer with hands-on experience in building web applications using the MERN stack. I'm passionate about creating clean, maintainable code and love working on both frontend and backend parts of web development. My projects reflect a strong understanding of secure authentication, REST APIs, and responsive UI design using modern tools like Tailwind CSS.",
    },
    {
      title: "Technical Skills",
      description: "I'm skilled in React, Next.js, Node.js, MongoDB, and Express.js, and I enjoy integrating frontend and backend systems seamlessly. I regularly use tools like Git for version control, Postman for API testing, and Vercel for deployment. I'm constantly pushing myself to learn more, explore new technologies, and improve as a developer.",
    },
    {
      title: "Career Goals",
      description: "I'm currently looking for opportunities to contribute to exciting projects, collaborate with awesome teams, or even intern at companies where I can grow and make an impact.",
    },
    {
      title: "Outside of Code",
      description: "When I'm not coding, you'll probably find me diving into light novels, watching Netflix or anime, or enjoying intense PlayStation gaming sessions. I believe creativity, curiosity, and consistency make the best developers—and I'm always bringing those into everything I do.",
    },
  ];

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
          About me
        </h2>
        <div
          className="h-1 w-24 bg-red-600 mx-auto mt-4 
                  transition-all duration-500 hover:w-32"
        ></div>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;