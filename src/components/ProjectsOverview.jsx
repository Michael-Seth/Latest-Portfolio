import { Swiper, SwiperSlide } from "swiper/react";
import extw1 from "../assets/projects/Export-to-wealth.png";
import extw2 from "../assets/projects/Etw.png";
import gomora1 from "../assets/projects/Gomora 1.png";
import gomora2 from "../assets/projects/gomora2.png";
import zonely1 from "../assets/projects/Zonely.png";
import zonely2 from "../assets/projects/Zonely2.png";
import stn1 from "../assets/projects/Ship2Naija.png";
import compressor1 from "../assets/projects/compressor.png";
import motherboard_1 from "../assets/projects/Motherboard_1.jpeg";
import PropTypes from "prop-types";
import Nodejs from "../assets/nodejs.svg";
import Expressjs from "../assets/express-js.svg";
import Graphql from "../assets/graphql.svg";
import Rest from "../assets/rest.svg";
import Postgresql from "../assets/postgresql.svg";
import Mongodb from "../assets/mongodb.svg";
import Nestjs from "../assets/nestjs.svg";
import Mysql from "../assets/mysql.svg";
import Reactjs from "../assets/reactjs.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProjectSlide.css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Export To Wealth",
    subTitle: "Online marketplaces for selling and shipping goods.",
    description:
      "Export to Wealth is an innovative Shipping and Logistics Management Software designed to streamline the shipping process for users. It also empowers users to calculate and estimate their profits across various e-commerce platforms, while ensuring Food and Drug Administration compliance.",
    mainImg: [extw2, extw1],
    packages: [Nodejs, Expressjs, Rest, Mysql, Reactjs],
  },
  {
    id: 2,
    title: "Gomora",
    subTitle: "Ecommerce store for fashoin wears and accessories",
    description:
      "Gomora is an e-commerce store that specializes in selling men's clothing. Built using Nodejs, Express, Mongodb and React, it offers a modern, user-friendly shopping experience for customers. With a focus on providing high-quality men's clothing, Gomora utilizes cutting-edge technology to provide a seamless and efficient way for customers to shop for the latest styles and trends in men's fashion",
    mainImg: [gomora2, gomora1],
    packages: [Nodejs, Expressjs, Graphql, Mongodb, Reactjs],
  },
  {
    id: 3,
    title: "Ship to 9ja",
    subTitle: "Logistics shipping, exportation and delivelry",
    description:
      "Ship to Naija is an innovative inventory system for export companies, built with Node.js, Express, and Sequelize. Microservice architecture ensures efficient shipment management, integrated with external APIs for real-time tracking, customs clearance, and accurate shipping cost calculations.",
    mainImg: [stn1],
    packages: [Nodejs, Graphql, Postgresql, Nestjs, Reactjs],
  },
  {
    id: 4,
    title: "Try-Zonely",
    subTitle: "Appointment scheduling application",
    description:
      "This type of software allows users to schedule, manage, and coordinate appointments, meetings, and events with others, often integrating with calendars and providing features like automated reminders, time zone conversions, and the ability to book appointments based on availability",
    mainImg: [zonely2, zonely1],
    packages: [Nodejs, Expressjs, Rest, Mysql, Reactjs],
  },
  {
    id: 5,
    title: "Compressor-gun",
    subTitle: "Image compression application",
    description:
      "Sentry Compact is an image processing web application built with JavaScript and Tailwind CSS. It allows users to easily compress images to any desired file size, making it a powerful tool for optimizing and managing images. With a simple and intuitive interface, Sentry Compact makes it easy for users to compress images efficiently, saving them time and storage space.",
    mainImg: [compressor1],
    packages: [Nodejs, Reactjs],
  },
  {
    id: 6,
    title: "Motherboard",
    subTitle: "Employee Benefit CRM",
    description:
      "Motherboard is a platform where employers can provide a wide range of benefits to their employees, from health insurance to fueling solutions and food benefits. Backed by a passionate team, dozens of merchants, and a powerful platform, Motherboard is set to help employers retain top talent without sacrificing their bottomline.",
    mainImg: [motherboard_1],
    packages: [Nodejs, Mysql, Reactjs],
  },
];

// NestedSwiper component that receives slides as props
function NestedSwiper({ slideImgs }) {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {slideImgs.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            className="object-contain object-center mx-auto sm:h-[28rem] rounded-lg"
            src={img}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function ProjectsOverview() {
  return (
    <section className="dark:bg-gray-950 border-t border-gray-900">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="text-left">
                <div className="items-center mx-auto">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="lg:justify-start">
                      <p className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
                        Featured Products
                      </p>
                    </div>
                    <div className="lg:justify-end">
                      <p className="mt-4 text-xl tracking-tight text-gray-600 dark:text-gray-200 lg:mt-0">
                        {slide.title}
                      </p>
                      <p className="mt-4 text-base text-gray-600 dark:text-gray-400 lg:mt-0">
                        {slide.subTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative items-center w-full mx-auto mt-12 rounded-lg">
                <NestedSwiper slideImgs={slide.mainImg} />
              </div>

              <div>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="mx-auto">
                    <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6 justify-center items-center mx-auto">
                      {slide.packages.map((icon, index) => (
                        <div
                          className="flex justify-center dark:bg-gray-100 bg-gray-900 rounded-md py-2 col-span-1 px-4 m-6"
                          key={index}
                        >
                          <img className="w-8" src={icon} alt="logo" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto lg:max-w-7xl">
                  <dl className="mx-auto">
                    <div>
                      <div>
                        <p className="text-2xl tracking-wide font-medium leading-6 text-black dark:text-gray-200">
                          Overview
                        </p>
                      </div>
                      <div className="mt-3 text-base text-justify text-gray-500 dark:text-gray-400">
                        {slide.description}
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

NestedSwiper.propTypes = {
  slides: PropTypes.array,
  slideImgs: PropTypes.array.isRequired,
};
export default ProjectsOverview;
