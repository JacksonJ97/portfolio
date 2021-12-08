import styled from "styled-components";

// Components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// Styles
const Wrapper = styled.nav``;

const Nav = () => {
  return (
    <Wrapper>
      <DesktopNav />
      <MobileNav />
    </Wrapper>
  );
};

export default Nav;
