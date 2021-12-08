import { useState } from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

// Components
import NavTitle from "../../../Utilities/NavTitle";

// Styles
const Wrapper = styled.div`
  display: flex;
  position: relative;

  .menu {
    position: absolute;
    top: 48px;
    right: -20%;
    width: 100vw;
    background-color: rgba(57, 62, 70, 0.7);
    text-align: center;
  }

  svg {
    font-size: 2rem;
    margin-right: 0.625em;
    cursor: pointer;
  }

  @media (min-width: 550px) {
    display: none;
  }
`;

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      {showMenu ? <CgClose onClick={() => setShowMenu(!showMenu)} /> : <HiMenu onClick={() => setShowMenu(!showMenu)} />}

      {showMenu && (
        <ul className="menu">
          <NavTitle title="Projects" target="projects" />
          <NavTitle title="Skills" target="skills" />
          <NavTitle title="About" target="about" />
        </ul>
      )}
    </Wrapper>
  );
};

export default MobileNav;
