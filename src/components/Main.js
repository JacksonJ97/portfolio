import styled from "styled-components";

// Components
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100vh);
`;

const Main = () => {
  return (
    <Wrapper>
      <Hero id="hero" />
      <Projects id="projects" />
      <div>
        <Skills id="skills" />
        <About id="about" />
      </div>
      <Contact id="contact" />
    </Wrapper>
  );
};

export default Main;
