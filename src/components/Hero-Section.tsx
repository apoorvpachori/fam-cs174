import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import ImagesView from "../assets/images/ImagesView.png";
import BudgetView from "../assets/images/BudgetView.png";
import CalendarView from "../assets/images/CalendarView.png";
import SubscriptionView from "../assets/images/SubscriptionTrackerView.png";
import CommandCenterView from "../assets/images/CommandCenterView.png";
import FamilyListsView from "../assets/images/FamilyListsView.png";
import DocumentStorageView from "../assets/images/DocumentStorageView.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="text-gray-600 h-screen body-font relative bg-blue-100">
      <div className="container mx-auto flex p-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Unite, Organize, Thrive:
            <br className="hidden lg:inline-block" />
            Welcome to the Future of Family!
          </h1>
          <p className="mb-8 leading-relaxed">
            Revolutionize family coordination with FAM! Our all-in-one digital
            companion streamlines schedules, manages tasks, and fosters seamless
            communication, making family life more harmonious. Dive into a
            smarter, more connected family experience today! Sign up for our
            exclusive beta below!
          </p>
          <div className="flex justify-center">
            <motion.a
              href="#call-to-action"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            >
              Sign up!
            </motion.a>
            <motion.a
              href="#content"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            >
              Learn more -&gt;
            </motion.a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {/* //calendar view */}
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded w-1/2 mx-auto object-cover object-center mb-6"
                  src={CalendarView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Synced Calendars
                </h2>
                <p className="leading-relaxed text-base">
                  Synchronize your family&apos;s important events effortlessly
                  with our integrated shared calendar, seamlessly compatible
                  with Google and Microsoft calendars.
                </p>
              </div>
            </SwiperSlide>
            {/* //budget view */}
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded w-1/2 mx-auto object-cover object-center mb-6"
                  src={BudgetView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Family Budgeting
                </h2>
                <p className="leading-relaxed text-base">
                  Master your family&apos;s finances with our intuitive
                  budgeting tool, seamlessly integrating with bank accounts for
                  effortless financial oversight.
                </p>
              </div>
            </SwiperSlide>
            {/* SubscriptionView */}
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded mx-auto w-1/2 object-cover object-center mb-6"
                  src={SubscriptionView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  FamilyHub Tracker
                </h2>
                <p className="leading-relaxed text-base">
                  Organize, track, and access your family&apos;s essentials,
                  from passwords to groceries, all in one intuitive customizable
                  tracker. Integrates with your favorite apps!
                </p>
              </div>
            </SwiperSlide>
            {/* images view */}
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded mx-auto w-1/2 object-cover object-center mb-6"
                  src={ImagesView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Family Photo Wall and Gallery
                </h2>
                <p className="leading-relaxed text-base">
                  Capture and cherish every moment together with FAM&apos;s
                  interactive photo wall, a centralized space for all your
                  family&apos;s memories.
                </p>
              </div>
            </SwiperSlide>
            {/* // family command center */}
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded mx-auto w-1/2 object-cover object-center mb-6"
                  src={CommandCenterView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Family Command Center
                </h2>
                <p className="leading-relaxed text-base">
                  Have a plethora of family management tools at your fingertips!
                  Featuring an intuitive UI that all members of the family can
                  use. You can even change the default language!
                </p>
              </div>
            </SwiperSlide>

            {/* //family lists  */}
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded mx-auto w-1/2 object-cover object-center mb-6"
                  src={FamilyListsView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Family Command Center
                </h2>
                <p className="leading-relaxed text-base">
                  Stay on the same page with easy to access real time shared
                  notes across the family! Keep track of groceries, to-dos, and
                  more!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="rounded mx-auto w-1/2 object-cover object-center mb-6"
                  src={DocumentStorageView}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Family Document Storage
                </h2>
                <p className="leading-relaxed text-base">
                  Keep all your families important documents available and
                  secure! Featuring the most advanced cloud security for your
                  convenience.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
