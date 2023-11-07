import CallToAction from "./components/CallToAction";
import Feature from "./components/Feature";
import HeroSection from "./components/Hero-Section";
import Team from "./components/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <main>
      <div id="home" />
      <Header />
      <motion.div
        id="hero-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        id="feature"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // viewport={{ once: true }}
      >
        <Feature />
      </motion.div>
      <motion.div
        id="team"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // viewport={{ once: true }}
      >
        <Team />
      </motion.div>
      <motion.div
        id="call-to-action"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // viewport={{ once: true }}
      >
        <CallToAction />
      </motion.div>
      <Footer />
    </main>
  );
}

export default App;
