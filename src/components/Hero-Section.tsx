import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
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
            <a
              href="#call-to-action"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign up!
            </a>
            <a
              href="#content"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Learn more -&gt;
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
