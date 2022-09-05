import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Skills />
      <Footer/>
    </>
  );
}

export default Home;