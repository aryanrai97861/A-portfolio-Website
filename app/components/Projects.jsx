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
        <div className="project-card mb-16 p-8 bg-neutral-800 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
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
      </div>
    </div>
  );
};

export default Projects;
