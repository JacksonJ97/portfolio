import styled from "styled-components";

// Components
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 1fr repeat(2, minmax(min-content, max-content));
`;

const Main = () => {
  return (
    <Wrapper>
      <Hero id="hero" />
      <Projects id="projects" />
      <Skills id="skills" />
      <About id="about" />
    </Wrapper>
  );
};

export default Main;
