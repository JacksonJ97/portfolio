import styled from "styled-components";

// Components
import NavTitle from "./NavTitle";

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
        <NavTitle title="Projects" target="projects" />
        <NavTitle title="Skills" target="skills" />
        <NavTitle title="About" target="about" />
      </ul>
    </Wrapper>
  );
};

export default Nav;
