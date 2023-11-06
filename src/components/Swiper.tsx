import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImagesView from "../assets/images/ImagesView.png";
import BudgetView from "../assets/images/BudgetView.png";
import CalendarView from "../assets/images/CalendarView.png";
import SubscriptionView from "../assets/images/SubscriptionTrackerView.png";
import CommandCenterView from "../assets/images/CommandCenterView.png";
import FamilyListsView from "../assets/images/FamilyListsView.png";
import DocumentStorageView from "../assets/images/DocumentStorageView.png";
const SwiperComponent = () => {
  return (
    <div className="xl:w-3/4 mx-auto p-4 ">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Features
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Experience the ultimate family dashboard with FAM! Effortlessly
          synchronize calendars, manage shared tasks, and keep treasured
          memories in one central hub. Elevate your family&apos;s organization,
          communication, and connection to unparalleled heights!
        </p>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
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
              Synchronize your family&apos;s important events effortlessly with
              our integrated shared calendar, seamlessly compatible with Google
              and Microsoft calendars.
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
              Master your family&apos;s finances with our intuitive budgeting
              tool, seamlessly integrating with bank accounts for effortless
              financial oversight.
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
              Organize, track, and access your family&apos;s essentials, from
              passwords to groceries, all in one intuitive customizable tracker.
              Integrates with your favorite apps!
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
              Featuring an intuitive UI that all members of the family can use.
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
              Stay on the same page with easy to access real time shared notes
              across the family! Keep track of groceries, to-dos, and more!
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
              Keep all your families important documents available and secure!
              Featuring the most advanced cloud security for your convenience.
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
