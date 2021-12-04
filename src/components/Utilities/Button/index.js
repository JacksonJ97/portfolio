import styled from "styled-components";

// Styles
const Wrapper = styled.button`
  font-size: 1rem;
  margin: 0 1em;
  padding: 0.5em;
  background-color: #ffd369;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Button = ({ text, target }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Button;
