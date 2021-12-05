import styled from "styled-components";

// Components
import SectionHeader from "./Utilities/SectionHeader";
import ProjectCardGrid from "./ProjectCardGrid";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Projects = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="Projects" />
      <ProjectCardGrid />
    </Wrapper>
  );
};

export default Projects;
