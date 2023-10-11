import box from "../assets/rectangle2.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProjectSlide.css";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

const slides = [
  { id: 1, content: "Slide 1 Content", name: "Osas", age: 27 },
  { id: 2, content: "Slide 2 Content", name: "John", age: 37 },
  { id: 3, content: "Slide 3 Content", name: "Ben", age: 17 },
];
function ProjectsOverview() {
  return (
    <section className="dark:bg-gray-950 border-t border-gray-900">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="text-left">
                <div className="items-center mx-auto lg:inline-flex">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div>
                      <p className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
                        I am a short heading
                      </p>
                    </div>
                    <div className="lg:ml-auto">
                      <p className="mt-4 text-lg tracking-tight text-gray-600 dark:text-gray-200 lg:mt-0">
                        Whether you&apos;re a beginner or an experienced
                        programmer, our SaaS product offers the tools you need
                        to be successful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative items-center w-full mx-auto mt-12 rounded-lg">
                <img
                  className="object-cover object-center w-full bg-gray-300 h-[28rem] rounded-lg"
                  src={box}
                  alt=""
                />
              </div>

              <div>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="mx-auto">
                    <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src={box} alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src={box} alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src={box} alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src={box} alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src={box} alt="logo" />
                      </div>
                      <div className="flex justify-center col-span-1 px-8">
                        <img className="max-h-12" src={box} alt="logo" />
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
                        <p className="text-lg font-medium leading-6 text-black dark:text-gray-200">
                          Developer experience
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring
                        you&apos;ll always be ahead.
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-lg font-medium leading-6 text-black dark:text-gray-200">
                          Designers go-to app
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring
                        you&apos;ll always be ahead.
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-lg font-medium leading-6 text-black dark:text-gray-200">
                          Easy onboarding
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring
                        you&apos;ll always be ahead.
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectsOverview;

<div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
  <div className="text-left">
    <div className="items-center mx-auto lg:inline-flex">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
            I am a short heading
          </p>
        </div>
        <div className="lg:ml-auto">
          <p className="mt-4 text-lg tracking-tight text-gray-600 dark:text-gray-200 lg:mt-0">
            Whether you&apos;re a beginner or an experienced programmer, our
            SaaS product offers the tools you need to be successful.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="relative items-center w-full mx-auto mt-12 rounded-lg">
    <img
      className="object-cover object-center w-full bg-gray-300 h-[28rem] rounded-lg"
      src={box}
      alt=""
    />
  </div>

  <div>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <div className="mx-auto">
        <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={box} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={box} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={box} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={box} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={box} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img className="max-h-12" src={box} alt="logo" />
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
            <p className="text-lg font-medium leading-6 text-black dark:text-gray-200">
              Developer experience
            </p>
          </div>
          <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
            Plus, our platform is constantly evolving to meet the changing needs
            of the tech industry, ensuring you&apos;ll always be ahead.
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg font-medium leading-6 text-black dark:text-gray-200">
              Designers go-to app
            </p>
          </div>
          <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
            Plus, our platform is constantly evolving to meet the changing needs
            of the tech industry, ensuring you&apos;ll always be ahead.
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg font-medium leading-6 text-black dark:text-gray-200">
              Easy onboarding
            </p>
          </div>
          <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
            Plus, our platform is constantly evolving to meet the changing needs
            of the tech industry, ensuring you&apos;ll always be ahead.
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>;
