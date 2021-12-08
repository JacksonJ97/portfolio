import styled from "styled-components";

// Components
import NavTitle from "../../../Utilities/NavTitle";

// Styles
const List = styled.ul`
  display: none;

  @media (min-width: 550px) {
    display: flex;
  }
`;

const DesktopNav = () => {
  return (
    <List>
      <NavTitle title="Projects" target="projects" />
      <NavTitle title="Skills" target="skills" />
      <NavTitle title="About" target="about" />
    </List>
  );
};

export default DesktopNav;
