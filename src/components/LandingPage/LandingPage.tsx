import { motion } from "framer-motion";
import React from "react";
import CallToAction from "./CallToAction/CallToAction";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HeroSection from "./Hero-Section/Hero-Section";
import Team from "./Team/Team";
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const LandingPage = () => {
  return (
    <main>
      <Header />
      <motion.div
        id="home"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        id="feature"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Feature />
      </motion.div>
      <motion.div
        id="team"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Team />
      </motion.div>
      <motion.div
        id="call-to-action"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CallToAction />
      </motion.div>
      <Footer />
    </main>
  );
};

export default LandingPage;
