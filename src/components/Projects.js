import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Projects = ({ id }) => {
  return <Wrapper id={id}>Projects</Wrapper>;
};

export default Projects;
