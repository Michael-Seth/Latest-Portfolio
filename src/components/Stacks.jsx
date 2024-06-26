function Stacks() {
  return (
    <section className="dark:bg-gray-950 border-t border-gray-900">
      <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="gap-12 lg:grid-cols-2 lg:grid">
          <div className="mb-16 sm:mb-0">
            <div className="max-w-xl">
              <div>
                <p className="text-2xl font-medium tracking-tight pb-3 text-black dark:text-white sm:text-4xl">
                  Technology Stack & Expertise
                  <br />
                </p>
                <span className=" md:text-xl text-lg font-normal dark:text-slate-400 tracking-normal">
                  An in-depth exploration of the technologies, frameworks, and
                  libraries I am proficient in.
                </span>
              </div>
            </div>
            <div className="mx-auto mt-4 sm:mt-12 lg:max-w-7xl">
              <ul
                role="list"
                className="grid sm:grid-cols-2 grid-rows-2 gap-4 list-none lg:gap-6"
              >
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black dark:text-white">
                      Backend Technologies
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    I specialize in building secure and efficient backend applications with Node.js (Express.js and Nest.js). Proficient in NoSQL and SQL databases such as MongoDB, PostgreSQL, MySQL.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black dark:text-white">
                      Frontend Development
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Skilled in React.js and related technologies, I craft
                    seamless, user-friendly interfaces with my backend
                    expertise, delivering a unified user experience in my
                    applications.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-20 sm:pb-0">
            <div className="max-w-xl mx-auto text-left lg:max-w-7xl">
              <h2 className="sr-only">Features.</h2>
              <div>
                <div className="grid grid-cols-3 gap-12 text-center lg:grid-cols-3 lg:space-y-0">
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        Node.js
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        Express.js
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        Nest.js
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        React.js
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        Docker
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        Postgres
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        MongoDB
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        MariaDB
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-5 font-medium leading-6 text-black dark:text-white">
                        AWS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stacks;
