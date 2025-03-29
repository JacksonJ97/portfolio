import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

const Main = () => {
  return (
    <main className="grid grid-cols-1 [grid-template-rows:100vh_1fr_repeat(2,minmax(min-content,max-content))]">
      <Hero id="hero" />
      <Projects id="projects" />
      <Skills id="skills" />
      <About id="about" />
    </main>
  );
};

export default Main;
