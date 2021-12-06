import styled from "styled-components";

// Components
import NavTitle from "../../Utilities/NavTitle";

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
        <NavTitle title="Contact" target="contact" />
      </ul>
    </Wrapper>
  );
};

export default Nav;
