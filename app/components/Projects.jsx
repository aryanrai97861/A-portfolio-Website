import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container ">
      <div className="flex flex-col items-center m-24 border-b border-red-600 ">
        <div className="text-center transform transition-all duration-700 hover:scale-105 ">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-red-600 to-amber-500 
                 text-transparent bg-clip-text
                 inline-block py-2 px-6 rounded-lg
                 shadow-lg hover:shadow-red-500/30
                 transition-all duration-500
                 animate-[pulse_3s_ease-in-out_infinite]"
          >
            Projects
          </h2>
          <div
            className="h-1 w-24 bg-red-600 mx-auto mt-4 
                  transition-all duration-500 hover:w-32"
          ></div>
        </div>
        <div className="project-card mb-16 p-8 bg-neutral-800 rounded-xl shadow-lg hover:scale-102 transition-transform hover:shadow-lg hover:shadow-red-500/80 duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            JWT Authentication Web App
          </h3>
          <p className="text-gray-300 mb-6">
            Built a full-stack user authentication system using Node.js,
            Express, MongoDB, and JWT.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                Designed responsive login and registration forms using HTML,
                Tailwind CSS, and vanilla JavaScript
              </li>
              <li>
                Implemented secure user authentication with password hashing
                (bcrypt) and token-based sessions (JWT)
              </li>
              <li>
                Created modular Express routes for user operations and protected
                access to secure endpoints
              </li>
              <li>
                Utilized CORS handling and Postman for backend API testing and
                validation
              </li>
              <li>
                Managed session state on the frontend using localStorage and
                custom error handling
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-amber-100 mb-2">
              User Flow:
            </h4>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>
                User Registration - User fills out the registration form.
                Backend receives the request, hashes the password, and stores
                user data.
              </li>
              <li>
                User Login - User enters credentials. Backend validates them and
                sends a JWT if correct.
              </li>
              <li>
                Token Storage - JWT is saved in localStorage on the client side.
              </li>
              <li>
                Protected Requests - Frontend includes the JWT in request
                headers. Middleware on backend verifies the token before
                allowing access to protected routes.
              </li>
              <li>
                Logout / Token Expiry - User can manually remove the token or
                wait for it to expire.
              </li>
            </ol>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/aryanrai97861/JWT-authentication-web-app"
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

            <div className="flex flex-wrap gap-3">
              {["JavaScript", "Node.js", "Express", "MongoDB", "JWT"].map(
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
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            SAAS Code Editor
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
                code in a sandboxed environment, delivering
                validation results directly in the interface.
              </li>
              <li>
                All code snippets are automatically versioned and stored in our
                Convex database, creating a searchable library of solutions
                accessible across devices.
              </li>
              <li>
                Unlockable advanced collaboration features
                through our Lemon Squeezy payment gateway, enabling snippet
                sharing, and, commenting.
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
      </div>
    </div>
  );
};

export default Projects;
