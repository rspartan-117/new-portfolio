import './App.css';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Certifications from './sections/Certifications/Certifications';

function App() {
  return (
    <>
      <Hero />
     <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
