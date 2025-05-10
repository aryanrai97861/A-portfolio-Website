"use client";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "C++ for C Programmers, Part A",
    issuer: "University of California, Santa Cruz",
    icon: "🧠",
    url: "https://www.coursera.org/account/accomplishments/verify/53FWWNZ3JD4C",
    issued: "Issued Nov 18, 2023",
  },
  // {
  //   title: "Artificial Intelligence Essentials V2",
  //   issuer: "IBM",
  //   icon: "🌐",
  //   url: "https://www.credly.com/go/FTcrt&q",
  //   issued: "Issued Dec 22, 2024",
  // },
  {
    title: "Introduction to generative AI",
    issuer: "Microsoft",
    icon: "🌐",
    url: "https://learn.microsoft.com/api/achievements/share/en-us/AryanRai-2914/E5BKN4WP?sharingId=32398E101A08B8C",
    issued: "Issued April 8, 2025",
  },
  {
    title: "The complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    icon: "🧠",
    url: "https://www.udemy.com/certificate/UC-197aadd8-3bd2-4c8d-acf9-71ccaf61275c/",
    issued: "Issued April 12, 2025",
  },
  // {
  //   title: "Oracle Certified Foundation Associate",
  //   issuer: "Oracle University",
  //   icon: "🏛️",
  //   url: "https://brm-certification.oracle.com/apex/f?p=1111:6:108487737019141:::::",
  //   issued: "Issued March 30, 2025",
  // },
];

export default function CertificateSection() {
  return (
    <div className="flex flex-col items-center my-24">
      <div className="text-center transform transition-all duration-700 hover:scale-105">
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500
                 text-transparent bg-clip-text
                 inline-block py-2 px-6 rounded-lg
                 shadow-lg hover:shadow-red-500/30
                 transition-all duration-500
                 animate-[pulse_3s_ease-in-out_infinite]"
        >
          Certifications
        </h2>
        <div
          className="h-1 w-24 bg-red-600 mx-auto mt-4
                  transition-all duration-500 hover:w-32"
        ></div>
      </div>
      <section className="px-4 w-full max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#1f1f1f] rounded-2xl p-6 shadow-md hover:scale-102 transition-transform hover:shadow-lg hover:shadow-red-500/80 duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-2xl">{cert.icon}</div>
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="text-red-500 hover:text-red-400 w-5 h-5" />
                </a>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              {cert.issued && (
                <p className="text-xs text-gray-500 mt-2">{cert.issued}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}