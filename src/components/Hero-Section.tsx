// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import HeroSwiper from "./HeroSwiper";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font relative bg-blue-100">
      <motion.div className="container mx-auto flex p-12 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
            Unite, Organize, Thrive:
            <br className="hidden lg:inline-block" />
            Welcome to the Future of Family!
          </h1>
          <p className="mb-8 leading-relaxed">
            Transform how your family connects with FAM! Think of it as the
            trusty sidekick in your family's adventures—keeping everyone's plans
            in sync, tackling to-do lists with ease, and ensuring that everyone
            stays in the loop, whether it's for meal planning or coordinating
            movie nights. It's like having a digital family room where harmony
            and organization meet. Ready for a smoother, more united family
            journey? Jump into our world with an exclusive sneak peek - sign up
            for our beta today!
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
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroSwiper />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
