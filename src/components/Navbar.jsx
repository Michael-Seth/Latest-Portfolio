import { useState } from "react";
import profileIcon from "../assets/profileIcon.png";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";

function Navbar() {
  // Step 1: Create a state variable to track the visibility
  const [isElementVisible, setIsElementVisible] = useState(false);

  // Step 2: Define a function to toggle the visibility
  const toggleElementVisibility = () => {
    setIsElementVisible(!isElementVisible);
  };
  return (
    <header className="bg-white dark:bg-gray-950 fixed top-0 w-full z-10">
      <div className="w-full mx-auto border-b dark:border-gray-800 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg tracking-tight text-black dark:text-white uppercase focus:outline-none focus:ring lg:text-2xl"
              href="/"
            >
              <span className="lg:text-lg uppecase focus:ring-0">Michael</span>
            </a>
            <button className="inline-flex items-center justify-center p-2 text-gray-400 dark:text-white hover:text-black dark:hover:text-white focus:outline-none focus:text-black dark:focus:text-white md:hidden">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className="hidden"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
            <a
              className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
              href="#"
            >
              Home
            </a>
            <a
              className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 lg:px-6 md:px-3 hover:text-blue-600"
              href="#"
            >
              Tech Stack
            </a>
            <a
              className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 lg:px-6 md:px-3 hover:text-blue-600"
              href="#"
            >
              Profile
            </a>
            <a
              className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 lg:px-6 md:px-3 hover:text-blue-600"
              href="#"
            >
              Projects
            </a>
            <a
              className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 lg:px-6 md:px-3 hover:text-blue-600"
              href="#"
            >
              Socials
            </a>

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              <div className="relative flex-shrink-0 ml-5">
                <div>
                  <button
                    type="button"
                    className="flex bg-white rounded-full focus:outline-none"
                    id="user-menu-button"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src={profileIcon}
                      alt="Michael Osas"
                    />
                  </button>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center p-[0.65rem] text-sm font-semibold text-white bg-black dark:bg-white rounded-full group focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700  dark:hover:bg-gray-200 active:bg-gray-800 active:text-white focus-visible:outline-blue-900"
                onClick={toggleElementVisibility}
              >
                {isElementVisible ? (
                  <img src={minusIcon} width="13px" alt="Plus icon" />
                ) : (
                  <img src={plusIcon} width="13px" alt="Plus icon" />
                )}
              </button>
              {isElementVisible && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendar.app.google/bBeCZXMknVz2FArE7"
                >
                  <div className="absolute top-16 right-2 z-10 w-56 py-4 cursor-pointer mt-2 origin-top-right bg-white dark:bg-gray-950 rounded-md shadow-lg ring-1 ring-black dark:ring-gray-400 ring-opacity-5 active:outline-gray-100 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="20px"
                      height="20px"
                    >
                      <rect
                        width="16"
                        height="16"
                        x="12"
                        y="16"
                        //className="bg-white"
                        fill="#fff"
                        transform="rotate(-90 20 24)"
                      />
                      <polygon
                        fill="#1e88e5"
                        points="3,17 3,31 8,32 13,31 13,17 8,16"
                      />
                      <path
                        fill="#4caf50"
                        d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
                      />
                      <path
                        fill="#fbc02d"
                        d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
                      />
                      <path
                        fill="#1565c0"
                        d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
                      />
                      <polygon fill="#e53935" points="13,7 13,17 3,17" />
                      <polygon
                        fill="#2e7d32"
                        points="38,24 37,32.45 27,24 37,15.55"
                      />
                      <path
                        fill="#4caf50"
                        d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
                      />
                    </svg>
                    <a
                      href="#"
                      className="block pl-3 text-sm text-gray-700 dark:text-gray-100 font-[600]"
                    >
                      Schedule a Meeting
                    </a>
                  </div>
                </a>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
