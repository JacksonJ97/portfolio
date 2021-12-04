import styled from "styled-components";

// Components
import Hero from "./Hero";
import Projects from "./Projects";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 100vh);
`;

const Main = () => {
  return (
    <Wrapper>
      <Hero id="hero" />
      <Projects id="projects" />
    </Wrapper>
  );
};

export default Main;
