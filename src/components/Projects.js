import styled from "styled-components";

// Components
import ProjectCardGrid from "./ProjectCardGrid";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin: 3em 0;
  }
`;

const Projects = ({ id }) => {
  return (
    <Wrapper id={id}>
      <h2>Projects</h2>
      <ProjectCardGrid />
    </Wrapper>
  );
};

export default Projects;
