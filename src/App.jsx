import AOS from "aos";
import "aos/dist/aos.css";

import Backdrop from "./components/Backdrop/Backdrop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

AOS.init();

function App() {
  return (
    <>
      <Backdrop />

      <main>
        <Hero />
        <About />
        <Tools />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
