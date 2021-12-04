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
        <NavTitle title="about" target="d" />
        <NavTitle title="contacts" target="e" />
      </ul>
    </Wrapper>
  );
};

export default Nav;
