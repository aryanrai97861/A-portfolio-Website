import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center m-24 border-b border-red-600">
        {/* Title section */}
        <div className="text-center transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 text-transparent bg-clip-text inline-block py-2 px-6 rounded-lg shadow-lg hover:shadow-red-500/30 transition-all duration-500 animate-[pulse_3s_ease-in-out_infinite]">
            Projects
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4 transition-all duration-500 hover:w-32"></div>
        </div>

        {/* Project cards */}
        <div className="project-card mb-16 p-8 bg-neutral-800 rounded-xl shadow-lg hover:scale-102 transition-transform hover:shadow-lg hover:shadow-red-500/80 duration-300">
          {/* Two Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex justify-center">
              <Image
                src="/AI_Fitness.png"
                alt="AI Fitness Trainer Dashboard"
                width={500}
                height={400}
                className="rounded-lg object-cover border-2 border-gray-700 shadow w-full h-64"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/AI_Fitness1.png"
                alt="AI Voice Assistant Interface"
                width={500}
                height={400}
                className="rounded-lg object-cover border-2 border-gray-700 shadow w-full h-64"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            AI Fitness Trainer
          </h3>
          <p className="text-gray-300 mb-6">
            Built a Full-stack AI-Fitness Trainer using Next.js (App Router) and
            TypeScript, enabling AI voice assistant.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                Configured Clerk for secure user authentication, enabling
                streamlined onboarding, access control, and persistent user
                sessions.
              </li>
              <li>
                Adopted Convex to power real-time data update, seamless storage
                management, and serverless logic-all without maintaining
                traditional backend services.
              </li>
              <li>
                Implemented AI workflows using Vapi and the Gemini API to
                dynamically generate personalized diet and workout plans based
                on user input and goals.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              User Flow:
            </h4>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                User authenticates securely through Clerk's streamlined
                authentication system.
              </li>
              <li>
                User initiates an interactive session with the voice assistant.
              </li>
              <li>
                The VAPI voice assistant communicates with dedicated API
                endpoints to request personalized diet and workout plans from
                Gemini.
              </li>
              <li>
                Gemini intelligently generates comprehensive programs within the
                Convex backend environment.
              </li>
              <li>
                VAPI retrieves the tailored data from Convex and elegantly
                arranges it in the appropriate interface sections.
              </li>
            </ol>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/aryanrai97861/AI-Fitness-Trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/git.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              GitHub Repo
            </Link>
            <Link
              href="https://ai-fitness-trainer-snowy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/vercel.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              Deployed Link
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "VAPI",
                "Convex",
                "Clerk",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-700 text-amber-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card mb-16 p-8 bg-neutral-800 rounded-xl shadow-lg hover:scale-102 transition-transform hover:shadow-lg hover:shadow-red-500/80 duration-300">
          {/* Two Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex justify-center">
              <Image
                src="/SAAS.png"
                alt="Code Editor Interface"
                width={500}
                height={400}
                className="rounded-lg object-cover border-2 border-gray-700 shadow w-full h-64"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/saas1.png"
                alt="Code Execution and Results"
                width={500}
                height={400}
                className="rounded-lg object-cover border-2 border-gray-700 shadow w-full h-64"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Real-Time Collaborative Code Editor
          </h3>
          <p className="text-gray-300 mb-6">
            Built a Full-stack SaaS Code Editor using Next.js (App Router) and
            TypeScript, enabling realtime code editing with a modern UI.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                Integrated Clerk for secure user authentication and account
                management, including support for sign-up/sign-in flows and user
                session handling.
              </li>
              <li>
                Utilized Convex as a backend-as-a-service to handle real-time
                data syncing, storage, and serverless functions without managing
                infrastructure.
              </li>
              <li>
                Implemented LemonSqueezy payment integration to handle
                subscription billing and enabled gated access to Pro plan
                features for premium users.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              User Flow:
            </h4>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                Users access the code editor workspace via Clerk's secure
                authentication, providing a frictionless entry point to the
                development environment.
              </li>
              <li>
                Developers leverage our feature-rich code editor to write, test,
                and optimize their code snippets with real-time syntax
                highlighting and intelligent suggestions.
              </li>
              <li>
                The platform integrates with Piston's execution engine to run
                code in a sandboxed environment, delivering validation results
                directly in the interface.
              </li>
              <li>
                All code snippets are automatically versioned and stored in our
                Convex database, creating a searchable library of solutions
                accessible across devices.
              </li>
              <li>
                Unlockable advanced collaboration features through our Lemon
                Squeezy payment gateway, enabling snippet sharing, and,
                commenting.
              </li>
            </ol>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/aryanrai97861/SAAS-Code-Editor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/git.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              GitHub Repo
            </Link>
            <Link
              href="https://saas-code-editor-peach.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/vercel.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              Deployed Link
            </Link>
            <div className="flex flex-wrap gap-3">
              {["TypeScript", "Next.js", "Tailwind CSS", "Convex", "Clerk"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-neutral-700 text-amber-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="project-card mb-16 p-8 bg-neutral-800 rounded-xl shadow-lg hover:scale-102 transition-transform hover:shadow-lg hover:shadow-red-500/80 duration-300">
          <div className="flex justify-center mb-6">
            <Image
              src="/Calendar.png"
              alt="Project Screenshot Placeholder"
              width={500}
              height={400}
              className="rounded-lg object-cover border-2 border-gray-700 shadow"
            />
          </div>
          
          

          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            AI Meeting Scheduling Agent
          </h3>
          <p className="text-gray-300 mb-6">
            Created a LLM-powered scheduling agent using LangGraph , FastAPI and
            Streamlit.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                Engineered an LLM-powered scheduling agent using LangGraph to
                autonomously handle meeting requests with natural language
                processing.
              </li>
              <li>
                Built a FastAPI backend integrated with Gemini API for
                intelligent scheduling and conflict resolution.
              </li>
              <li>
                Developed a Streamlit dashboard for real-time monitoring,
                debugging, and user interaction analytics
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              User Flow:
            </h4>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>User accesses the Streamlit dashboard.</li>
              <li>
                User submits a meeting request or scheduling query in natural
                language.
              </li>
              <li>
                The request is sent to the FastAPI backend, which processes the
                input and interacts with the Gemini API for intelligent
                scheduling and conflict resolution.
              </li>
              <li>
                LangGraph orchestrates the LLM workflow, parsing intent,
                extracting entities (like date, time, participants), and
                managing conversation state.
              </li>
              <li>
                The backend checks for conflicts, suggests optimal meeting
                times, and updates the schedule accordingly.
              </li>
              <li>
                The Streamlit dashboard displays the scheduling outcome,
                provides real-time feedback, and logs analytics for user
                interactions.
              </li>
            </ol>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/aryanrai97861/Tailor-Talk-Calendar-LLM-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/git.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              GitHub Repo
            </Link>
            <Link
              href="https://tailor-talk-calendar-llm-agent-echfzcjgbhzdfncjigcofu.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/vercel.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              Deployed Link
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                "StreamLit",
                "Python",
                "FastAPI",
                "LangGraph",
                "Gemini API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-700 text-amber-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card mb-16 p-8 bg-neutral-800 rounded-xl shadow-lg hover:scale-102 transition-transform hover:shadow-lg hover:shadow-red-500/80 duration-300">
          <div className="flex justify-center mb-6">
            <Image
              src="/AI_Text.png"
              alt="Project Screenshot Placeholder"
              width={500}
              height={400}
              className="rounded-lg object-cover border-2 border-gray-700 shadow"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            AI Evaluator
          </h3>
          <p className="text-gray-300 mb-6">
            Developed a Full-stack AI-powered Evaluator using React and RestAPI
            to automate and streamline answer assessment using Gemini.
          </p>
          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                Integrated Gemini API for intelligent, context-aware evaluation
                of text-based submissions.
              </li>
              <li>
                Developed a modern, responsive user interface using React,
                Tailwind CSS, and Framer Motion for smooth animations and an
                engaging user experience.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              User Flow:
            </h4>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                User fills out and submits the evaluation text on the React
                frontend.
              </li>
              <li>
                Backend receives the input, processes it through the Gemini API,
                and answer it contextually.
              </li>
              <li>User views the report directly from the interface.</li>
            </ol>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/aryanrai97861/AI-Evaluator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/git.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              GitHub Repo
            </Link>
            <Link
              href="https://ai-evaluator-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/vercel.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="filter brightness-0 invert"
              />
              Deployed Link
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                "TypeScript",
                "Node.js",
                "Express.js",
                "React.js",
                "Gemini",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-700 text-amber-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
