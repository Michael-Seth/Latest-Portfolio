import myImage from "../assets/rectangle2.svg";
import mainImg from "../assets/main-img.jpg";

function Hero() {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto overflow-hidden md:px-12 lg:px-16 max-w-7xl">
        {/* <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <div className="max-w-xl lg:p-10">
              <div>
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  I am a Software Engineer
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Use this paragraph to share information about your company or
                  products. Make it engaging and interesting, and showcase your
                  brand's personality. Thanks for visiting our website!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a
                  href="#"
                  className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Download CV
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                >
                  LinkedIn &nbsp; →
                </a>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 lg:ml-auto">
            <div className="absolute transform lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:translate-x-8 sm:left-1/2 sm:top-0 sm:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-44 lg:opacity-100 sm:opacity-0">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={myImage}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={myImage}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-52">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={myImage}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-52">
                    <img
                      alt="thumbnail"
                      className="object-cover h-[350px] rounded-lg"
                      src={mainImg}
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-52">
                    <img
                      alt="thumbnail"
                      className="object-cover border rounded-lg"
                      src={myImage}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={myImage}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="h-full overflow-hidden w-44">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={myImage}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
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

export default Hero;
