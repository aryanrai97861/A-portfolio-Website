import React from "react";

const Page = () => {
  const activities = [
    {
      title: "Discipline Committee Member",
      description: "Served on the Discipline Committee during RKGIT's Sports Fest, ensuring smooth event operations, enforcing rules, and maintaining order. Developed leadership, teamwork, and conflict-resolution skills while contributing to a successful and fair competition.",
    },
    {
      title: "Electric Car Making Competition",
      description: "Participated in an electric car-making competition organized by the robotics club, contributing to the design, assembly, and testing of the vehicle. Gained hands-on experience in EV technology, teamwork, and problem-solving while competing with innovative student projects.",
    },
    {
      title: "Drone-Making Competition",
      description: "Participated in a college drone-making competition where I collaborated with a team to design, build, and test a functional drone. Gained hands-on experience in aerodynamics, electronics, and teamwork while competing against other innovative projects. Placed in the top 10 in the competition.",
    },
    {
      title: "Hackathon",
      description: "Participated in a hackathon organized by Hack2Skill, collaborating with a team to develop an innovative tech solution under time constraint. Enhanced problem-solving, coding, and teamwork skills while competing with talented participants.",
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
          Extracurricular Activities
        </h2>
        <div
          className="h-1 w-24 bg-red-600 mx-auto mt-4 
                  transition-all duration-500 hover:w-32"
        ></div>
      </div>

      <div className="mt-16 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 h-full"
            >
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                {activity.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;