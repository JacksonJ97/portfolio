import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

// Components
import Nav from "./Nav";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75em 0;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(57, 62, 70, 0.7);

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #222831;
    background-color: #eeeeee;
  }

  .logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25em;
    background-color: #eeeeee;
    border-radius: 50%;
    margin-left: 1.25em;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <a href="#hero" className="logo-link">
        <img src={logo} alt="Logo" />
      </a>
      <Nav />
    </Wrapper>
  );
};

export default Header;
