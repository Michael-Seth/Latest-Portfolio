import React from "react";

function ProjectsOverview() {
  return (
    <section>
      <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-left">
          <div className="items-center mx-auto lg:inline-flex">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  I am a short heading
                </p>
              </div>
              <div className="lg:ml-auto">
                <p className="mt-4 text-lg tracking-tight text-gray-600 lg:mt-0">
                  Whether you're a beginner or an experienced programmer, our
                  SaaS product offers the tools you need to be successful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center w-full mx-auto mt-12">
          <img
            className="object-cover object-center w-full bg-gray-300 h-96"
            src="../images/placeholders/rectangle1.svg"
            alt=""
          />
        </div>

        <div>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="mx-auto">
              <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
                <div className="flex justify-center col-span-1 px-8">
                  <img
                    className="max-h-12"
                    src="../images/logos/8.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 px-8">
                  <img
                    className="max-h-12"
                    src="../images/logos/2.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 px-8">
                  <img
                    className="max-h-12"
                    src="../images/logos/3.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 px-8">
                  <img
                    className="max-h-12"
                    src="../images/logos/4.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 px-8">
                  <img
                    className="max-h-12"
                    src="../images/logos/5.svg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 px-8">
                  <img
                    className="max-h-12"
                    src="../images/logos/6.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-12 mx-auto lg:max-w-7xl">
            <dl className="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
              <div>
                <div>
                  <p className="text-lg font-medium leading-6 text-black">
                    Developer experience
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
              <div>
                <div>
                  <p className="text-lg font-medium leading-6 text-black">
                    Designers go-to app
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
              <div>
                <div>
                  <p className="text-lg font-medium leading-6 text-black">
                    Easy onboarding
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsOverview;
