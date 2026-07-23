import AOS from "aos";
import "aos/dist/aos.css";

import Aurora from "./components/Aurora/Aurora";
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
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

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
