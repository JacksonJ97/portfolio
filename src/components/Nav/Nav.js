import styled from "styled-components";

// Components
import NavTitle from "../Utilities/NavTitle";

// Styles
const Wrapper = styled.nav`
  ul {
    display: flex;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <ul>
        <NavTitle title="projects" target="projects" />
        <NavTitle title="skills" target="skills" />
        <NavTitle title="about" target="about" />
        <NavTitle title="contact" target="contact" />
      </ul>
    </Wrapper>
  );
};

export default Nav;
