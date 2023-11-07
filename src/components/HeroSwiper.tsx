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

const HeroSwiper = () => {
  return (
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
            Organize Your Days
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Synced Calendars
          </h2>
          <p className="leading-relaxed text-base">
            Ditch the multiple calendars and streamline your family's daily
            schedules. Picture this: school plays, doctor's appointments, and
            family gatherings all neatly organized in one place. It's like
            having a personal assistant for coordinating everyone's life!
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
            Financial Unity
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Family Budgeting
          </h2>
          <p className="leading-relaxed text-base">
            Imagine managing your household expenses as smoothly as a group
            chat. With our tool, you can have a clear picture of where the
            pocket money goes, plan for that family holiday, or keep tabs on
            weekly grocery spends, like a family's financial diary!
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
            Track Effortlessly
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            FamilyHub Tracker
          </h2>
          <p className="leading-relaxed text-base">
            Ever forgot about that gym membership you never use? With our
            tracker, you'll have a bird's-eye view of all subscriptions,
            ensuring you never miss a renewal or payment. It's like having a
            personal secretary for your digital life!
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
            Memories at a Glance
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Family Photo Wall and Gallery
          </h2>
          <p className="leading-relaxed text-base">
            Turn your family's photographic journey into a story. From baby's
            first steps to grandpa's 80th birthday bash, every picture matters,
            and now they're all in one captivating gallery. It's your family's
            personal museum, right at your fingertips.
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
            Your Home's Hub
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Family Command Center
          </h2>
          <p className="leading-relaxed text-base">
            Imagine a digital bulletin board in the heart of your home, where
            everyone knows the Wi-Fi password, the weather forecast, and who's
            turn it is to do the dishes. Our command center makes managing the
            hustle of home life a breeze.
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
            Shared Notes, Seamless Coordination
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Family Lists and More
          </h2>
          <p className="leading-relaxed text-base">
            Keep everyone in the loop, from your spouse's dietary preferences
            for tonight's dinner to your teen's wish list for their birthday.
            It's like having a family forum that ensures no detail is too small
            to be overlooked.
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
            Secure the Essentials
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Family Document Storage
          </h2>
          <p className="leading-relaxed text-base">
            Family paperwork can be as chaotic as herding cats. But imagine a
            secure vault where birth certificates, insurance policies, and even
            treasured recipes are safe and sound, and always accessible for
            everone!
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSwiper;
