import { motion } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Parents from "../assets/images/parents.svg";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg"
          : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={Parents}
              alt="parentsicon"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          <span className="ml-3 text-xl">FAM</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <motion.a
            href="#home"
            className="mr-5 hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          >
            Home
          </motion.a>
          <motion.a
            href="#feature"
            className="mr-5 hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          >
            FAM Personal Assistant
          </motion.a>
          <motion.a
            href="#team"
            className="mr-5 hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          >
            Team
          </motion.a>
          <motion.a
            href="#call-to-action"
            className="mr-5  bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base mt-4 md:mt-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          >
            Sign Up!
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
