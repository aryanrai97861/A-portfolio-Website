import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";

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

  const SkillSection = ({ title, description, skills, delay = 0 }) => (
    <div className="skill-category border-b border-red-600 pb-16">
      <h3 className="text-red-600 text-2xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-center">{description}</p>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg w-24 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80">
            <Image src={skill.icon} alt={skill.name} width={40} height={40} className="mb-2" />
            <span className="text-amber-50 text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        <Hero/>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 text-transparent bg-clip-text inline-block py-2 px-6 rounded-lg shadow-lg">Coding Profiles</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4" />
        </div>
        <div className="flex justify-center gap-6 mb-12">
          {profileLinks.map((link) => (
            <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
              <div className="p-3 bg-neutral-800 rounded-lg hover:bg-red-600 transition-all duration-300 group-hover:scale-110 shadow hover:shadow-red-500/40">
                <Image src={link.icon} alt={link.name} width={24} height={24} className="filter brightness-0 invert" />
              </div>
              <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
            </Link>
          ))}
        </div>
        <SkillSection title="Data Structures & Algorithms" description="Strong foundation in problem-solving with efficient algorithms and data structures implementation." skills={[{ name: "Java", icon: "/java.svg" }, { name: "Python", icon: "/python.svg" }, { name: "JavaScript", icon: "/javascript.svg" }, { name: "TypeScript", icon: "/typescript.svg" }]} delay={0.3} />
        <SkillSection title="Core Concepts" description="Core computer science concepts and problem-solving foundations." skills={[{ name: "OOPS", icon: "/oops.svg" }, { name: "System Design", icon: "/system.png" }]} delay={0.3} />
        <SkillSection title="DevOps & Cloud" description="Tools and platforms for automation, deployment, and cloud infrastructure." skills={[{ name: "Linux", icon: "/linux.svg" }, { name: "Docker", icon: "/docker.svg" }, { name: "Kubernetes", icon: "/Kubernetes.svg" }, { name: "AWS", icon: "/aws.svg" }]} delay={0.3} />
        <SkillSection title="Frontend Development" description="Building responsive and interactive user interfaces with modern frameworks and libraries." skills={[{ name: "React.js", icon: "/react.svg" }, { name: "Next.js", icon: "/nextjs.svg" }, { name: "Tailwind CSS", icon: "/tailwind-css.svg" }]} delay={0.3} />
        <SkillSection title="Backend Development" description="Developing robust server-side applications and RESTful APIs with Node.js ecosystem." skills={[{ name: "Node.js", icon: "/nodejs.svg" }, { name: "Express.js", icon: "/express.svg" }, { name: "Rest API", icon: "/rest.svg" }, { name: "Convex", icon: "/convex.png" }]} delay={0.3} />
        <SkillSection title="Database" description="Experience with NoSQL databases for flexible and scalable data storage solutions." skills={[{ name: "MongoDB", icon: "/mongodb.svg" }, { name: "MySQL", icon: "/mysql.svg" }, { name: "Prisma ORM", icon: "/prisma.svg" }]} delay={0.3} />
        <SkillSection title="Development Tools" description="Essential tools for version control, collaboration, deployment, testing and development workflow." skills={[{ name: "Git", icon: "/git.svg" }, { name: "Postman", icon: "/postman.svg" }, { name: "Vercel", icon: "/vercel1.svg" }]} delay={0.3} />
      </div>
    </section>
  );
};

export default Skills;
