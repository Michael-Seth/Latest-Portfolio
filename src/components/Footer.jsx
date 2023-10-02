function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-black">
              <div>
                <p className="font-semibold leading-6 text-black uppercase">
                  Unwrapped
                </p>
                <p className="mt-1 text-sm">Unwrapped your mind.</p>
              </div>
            </div>
            <nav className="flex gap-8 mt-11">
              <a
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                href="#"
              >
                <span className="relative z-10">Alpine</span>
              </a>
              <a
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                href="#"
              >
                <span className="relative z-10">Nextjs</span>
              </a>
              <a
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                href="#"
              >
                <span className="relative z-10">Tailwind</span>
              </a>
              <a
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                href="#"
              >
                <span className="relative z-10">FAQs</span>
              </a>
            </nav>
          </div>
          <div className="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex items-center justify-center flex-none w-24 h-24 bg-black rounded-xl">
              <svg
                className="w-5 h-5"
                viewBox="0 0 232 232"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z"
                  fill="#0c0c0c"
                ></path>
              </svg>{" "}
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-black">
                <a href="#">
                  <span className="absolute inset-0 sm:rounded-2xl"></span>Stay
                  updated
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-500 hover:text-blue-600">
                Follow us for social media for news and updates
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="max-w-xl">
            <form
              className="flex flex-col items-center justify-center max-w-sm mx-auto"
              action=""
            >
              <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                  placeholder="Enter your email..."
                  required=""
                />
                <button
                  type="button"
                  className="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  <div style={{ position: "relative" }}></div>
                  Subscribe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-auto ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            © Copyright 2022 All rights reserved.
          </p>
        </div> */}
        <div className="px-4 pb-2 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-2 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
              <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                <span className="sr-only">github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
                <ion-icon
                  className="w-5 h-5 md hydrated"
                  name="logo-github"
                  role="img"
                  aria-label="logo github"
                ></ion-icon>
              </a>
              <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                <span className="sr-only">twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                </svg>
                <ion-icon
                  className="w-5 h-5 md hydrated"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
              <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                </svg>
                <ion-icon
                  className="w-5 h-5 md hydrated"
                  name="logo-instagram"
                  role="img"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
              <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                <span className="sr-only">Linkedin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
                <ion-icon
                  className="w-5 h-5 md hydrated"
                  name="logo-linkedin"
                  role="img"
                  aria-label="logo linkedin"
                ></ion-icon>
              </a>
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-400">
              <span className="mx-auto mt-2 text-sm text-gray-500">
                Copyright © 2018 - 2023 | All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
/* <footer className="border-t border-gray-200"> */
