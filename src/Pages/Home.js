import { motion, AnimatePresence } from "framer-motion";
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
  const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }
  return (
    <AnimatePresence
    mode='wait'
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills />
        <Footer/>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;