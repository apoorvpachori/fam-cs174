import CallToAction from "./components/CallToAction/CallToAction";
import Feature from "./components/Feature/Feature";
import HeroSection from "./components/Hero-Section/Hero-Section";
import Team from "./components/Team/Team";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";
import "./styles/globals.css";

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

function App() {
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
}

export default App;
