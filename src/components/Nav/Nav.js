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
        <NavTitle title="about" />
        <NavTitle title="projects" />
        <NavTitle title="contacts" />
      </ul>
    </Wrapper>
  );
};

export default Nav;
