import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-mj-yellow dark:bg-rp-black ">
      <div className=" px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">

        <div align="center" className=" lg:text-2xl py-2 text-xl mt-4  lg:justify-center ">
          {props.isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="bg-mj-yellow text-mj-black px-4 py-2 rounded-lg font-semibold flex items-center w-fit my-2 "
            >
              Dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={props.openModalSignup}
              className=" bg-mj-yellow text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit "
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <div className="flex flex-col justify-center lg:text-2xl py-2 text-xl text-white font-bold ">
            Track all your expenses here ☝️
          </div>
          </div>
          
        
        <div className=" border-t border-gray-100 pt-8 dark:border-gray-800 sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <span
               
                className="text-yellow-500 transition hover:opacity-75 dark:text-yellow-400"
              >
                All rights reserved &copy; 2023
              </span>
            </li>

            <li>
              <Link
                to="/about-us"
                className="text-red-500 transition hover:opacity-75 dark:text-red-400"
              >
                ARDHY
              </Link>
            </li>

            <li>
              <li
                
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                ADBMS
              </li>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="https://www.github.com/Mr-Yash-beldar/Budget_Buddy"
                target="blank"
                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              >
                <span className="sr-only">GitHub</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
