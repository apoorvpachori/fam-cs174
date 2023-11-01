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

const SwiperComponent = () => {
  return (
    <div className="xl:w-3/4 mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
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
            </p>
          </div>
        </SwiperSlide>

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
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
