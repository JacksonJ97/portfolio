import styled from "styled-components";

// Components
import Nav from "./Nav/Nav";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: rgba(57, 62, 70, 0.7);
`;

const Header = () => {
  return (
    <Wrapper>
      <a href="#hero">
        <div>Logo</div>
      </a>
      <Nav />
    </Wrapper>
  );
};

export default Header;
