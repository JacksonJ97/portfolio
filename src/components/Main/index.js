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
  /* grid-template-rows: 100vh 77vh 88vh; */
  grid-template-rows: 100vh 1fr 1fr;
`;

const Main = () => {
  return (
    <Wrapper>
      <Hero id="hero" />
      <Projects id="projects" />
      {/* <div>
        <Skills id="skills" />
        <About id="about" />
      </div> */}
    </Wrapper>
  );
};

export default Main;
