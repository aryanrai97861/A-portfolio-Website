import React from "react";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  const profileLinks = [
    {
      name: "GitHub",
      icon: "/git.svg",
      url: "https://github.com/aryanrai97861",
    },
    {
      name: "LeetCode",
      icon: "/leetcode.svg",
      url: "https://leetcode.com/u/heyy_aryanrai/",
    },
    {
      name: "GeeksforGeeks",
      icon: "/gfg.svg",
      url: "https://www.geeksforgeeks.org/user/aryanraifw7/",
    },
  ];
  return (
    <div>
      <div className="container ">
        <div className="flex flex-col items-center m-24 ">
          <div className="text-3xl whitespace-nowrap ">
            Aryan Kumar Rai - Aspiring Web Developer
          </div>

          <p className="description max-w-2xl mt-4 text-center border-b border-red-600 pb-6">
            Aspiring Full Stack Developer with personal experience in building
            web applications using the MERN stack (MongoDB, Express.js, React,
            Node.js). Proficient in implementing secure user authentication
            using JWT and Bcrypt, and integrating frontend and backend systems
            seamlessly. Skilled in using Postman for API testing, Git for
            version control, and Tailwind CSS for responsive UI design.
            Passionate about writing clean, maintainable code and eager to
            contribute to collaborative development environments.
          </p>
          <div className="text-center transform transition-all duration-700 hover:scale-105 mt-8 mb-8 ">
            <h2
              className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 
                         text-transparent bg-clip-text inline-block py-2 px-6 rounded-lg
                         shadow-lg hover:shadow-red-500/30 transition-all duration-500
                         animate-[pulse_3s_ease-in-out_infinite]"
            >
              Coding Profiles
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4 transition-all duration-500 hover:w-32"></div>
          </div>
          <div className="w-full max-w-2xl mb-12 relative">
            <div className="custom-shape-container p-4">
              <div className="flex justify-center gap-6">
                {profileLinks.map((link) => (
                  <Link
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="p-3 bg-neutral-800 rounded-lg hover:bg-red-600 transition-all duration-300 group-hover:scale-110 shadow hover:shadow-red-500/40">
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={24}
                        height={24}
                        className="filter brightness-0 invert"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-red-600 w-full my-4"></div>
          <div className="text-center transform transition-all duration-700 hover:scale-105 mt-6 mb-6">
            <h2
              className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 
                         text-transparent bg-clip-text inline-block py-2 px-6 rounded-lg
                         shadow-lg hover:shadow-red-500/30 transition-all duration-500
                         animate-[pulse_3s_ease-in-out_infinite]"
            >
              Technical Skills
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4 transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="mt-12 w-full max-w-4xl space-y-16 ">
            <div className="skill-category border-b border-red-600 pb-16">
              <h3 className="text-2xl font-semibold mb-4 text-center text-red-600">
                Data Structures & Algorithms
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">
                Strong foundation in problem-solving with efficient algorithms
                and data structures implementation.
              </p>
              <div className="flex flex-wrap justify-center gap-6 ">
                {[
                  { name: "Java", icon: "/java.svg" },
                  { name: "Python", icon: "/python.svg" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform  hover:shadow-lg hover:shadow-red-500/80"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-amber-50 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category border-b border-red-600 pb-16">
              <h3 className="text-red-600 text-2xl font-semibold mb-4 text-center">
                Frontend Development
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">
                Building responsive and interactive user interfaces with modern
                frameworks and libraries.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "React.js", icon: "/react.svg" },
                  { name: "Next.js", icon: "/nextjs.svg" },
                  { name: "JavaScript", icon: "/javascript.svg" },
                  {name: "TypeScript", icon: "/typescript.svg"},
                  { name: "Tailwind CSS", icon: "/tailwind-css.svg" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-amber-50 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category border-b border-red-600 pb-16">
              <h3 className="text-red-600 text-2xl font-semibold mb-4 text-center">
                Backend Development
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">
                Developing robust server-side applications and RESTful APIs with
                Node.js ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "Node.js", icon: "/nodejs.svg" },
                  { name: "Express.js", icon: "/express.svg" },
                  {name: "Clerk", icon: "/clerk.png"},
                  {name: "Convex", icon: "/convex.png"}
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-amber-50 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category border-b border-red-600 pb-16">
              <h3 className="text-red-600 text-2xl font-semibold mb-4 text-center">
                Database
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">
                Experience with NoSQL databases for flexible and scalable data
                storage solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[{ name: "MongoDB", icon: "/mongodb.svg" },
                  {name: "Convex", icon: "/convex.png"}
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-amber-50 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category border-b border-red-600 pb-16">
              <h3 className="text-red-600 text-2xl font-semibold mb-4 text-center">
                Development Tools
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">
                Essential tools for version control, collaboration, deployment
                ,testing and development workflow.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "Git", icon: "/git.svg" },
                  { name: "Postman", icon: "/postman.svg" },
                  { name: "Vercel", icon: "vercel1.svg" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-amber-50 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category border-b border-red-600 pb-16">
              <h3 className="text-red-600 text-2xl font-semibold mb-4 text-center">
                AI Tools
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">
                Integrated AI assistant into web applications for real-time conversational interfaces.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {[{ name: "Vapi", icon: "/vapi.png" }].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-amber-50 text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
