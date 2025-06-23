"use client";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="mt-12">
        <div className="flex flex-col items-center">
          <div className="text-center transform transition-all duration-700 hover:scale-105">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 text-transparent bg-clip-text inline-block py-2 px-6 rounded-lg shadow-lg hover:shadow-red-500/30 transition-all duration-500 animate-[pulse_3s_ease-in-out_infinite]">Contact me</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4 transition-all duration-500 hover:w-32"></div>
          </div>
        </div>
        <div className="max-w-xl mx-auto px-4 py-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img src="/Smiley.png" alt="Aryan Kumar Rai" className="w-24 h-24 rounded-full border-2 border-gray-700" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold">Aryan Kumar Rai</h1>
                <p className="text-gray-400">Aspiring Software Developer</p>
                <p className="mt-2 text-sm">Aspiring Software developer,<br />Skilled in RestAPI, MERN Stack,<br />Next.js, Cloud service, PrismaORM .<br />TypeScript, Gemini Integration and deployments.</p>
                <p className="mt-2 text-gray-400 text-sm">RKGIT | AKTU</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="https://www.linkedin.com/in/aryan-kumar-rai-a3547430b/" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    View Profile
                  </a>
                  <a href="https://drive.google.com/file/d/1UEkH07_U8gLE-GiOfKQeTLM95cTjnb8b/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded">
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">I'm always up for a chat! Feel free to reach out.</p>
          <div className="mt-6 space-y-4">
            <a href="mailto:aryanrai97861@gmail.com" className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full py-3 px-6 mx-auto max-w-md hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80">
              <span className="bg-red-500 p-1 rounded mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </span>
              aryanrai97861@gmail.com
            </a>
            <a href="tel:+917379963404" className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full py-3 px-6 mx-auto max-w-md hover:scale-105 transition-transform hover:shadow-lg hover:shadow-red-500/80">
              <span className="bg-red-500 p-1 rounded mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              </span>
              +91 7379963404
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;