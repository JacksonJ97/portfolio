import styled from "styled-components";

// Components
import Nav from "./Nav/Nav";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <div>Logo</div>
      <Nav />
    </Wrapper>
  );
};

export default Header;
