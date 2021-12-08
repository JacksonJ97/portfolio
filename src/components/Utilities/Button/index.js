import styled from "styled-components";

// Styles
const Wrapper = styled.button`
  font-size: 1.125rem;
  margin: 0 0.75em;
  padding: 0.75em;
  background-color: #ffd369;
  color: #222831;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #eeeeee;
  }
`;

const Button = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Button;
