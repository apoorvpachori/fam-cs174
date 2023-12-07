import { useEffect, useState } from "react";
import AssistantView from "../../../assets/images/AssistantView.png";
import { useAnimation, motion } from "framer-motion";
const Feature = () => {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const onInView = () => {
    setIsInView(true);
  };
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // wait for the parent animation
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
    // Add additional animations here
  };

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3, // This will create the staggered effect
      },
    },
  };

  const childVariants = {
    hidden: {
      x: -50, // how far the children start from the left
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring", // optional, for a springy effect
        stiffness: 100, // optional, adjust spring stiffness
      },
    },
  };

  return (
    <section className="lg:h-50 p-16 text-gray-600 body-font flex items-start justify-center flex-col overflow-hidden">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full text-center">
          <h1 className="text-3xl lg:text-4xl pb-10 text-gray-900">
            Introducing FAM Personal Assistant!
          </h1>
        </div>
        <motion.div
          className="lg:max-w-lg max-w-xs mx-auto mb-6 lg:mb-0 p-6 lg:p-0 rounded-lg overflow-hidden"
          variants={featureVariants}
          initial="hidden"
          animate={controls}
          onViewportEnter={onInView}
          viewport={{ once: true, amount: 0.5 }} // adjust as needed for when you consider the section "in view"
        >
          <img alt="feature" src={AssistantView} />
        </motion.div>

        <motion.div
          className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            variants={childVariants}
          >
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-md lg:text-lg title-font font-medium mb-3">
                Intelligent Family Companion
              </h2>
              <p className="leading-relaxed text-sm">
                Dive into a smarter family experience with FAM&apos;s AI
                Personal Assistant, tailored to anticipate and meet your
                family&apos;s unique needs, making management a breeze.
              </p>
              <a className="mt-3 text-indigo-500 text-sm inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            variants={childVariants}
          >
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-md lg:text-lg title-font font-medium mb-3">
                Voice & Text Command Control
              </h2>
              <p className="leading-relaxed text-base">
                Interact naturally using voice or text, whether you&apos;re
                updating schedules, setting reminders, or seeking insights — all
                powered by our advanced AI capabilities.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            variants={childVariants}
          >
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-md lg:text-lg title-font font-medium mb-3">
                Evolving Personalization
              </h2>
              <p className="leading-relaxed text-base">
                Benefit from an AI that learns from every interaction, growing
                more attuned to your family&apos;s dynamics and preferences,
                ensuring a truly personalized family management experience.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
