import styled from "styled-components";

// Styles
const Wrapper = styled.button`
  font-size: 1.125rem;
  margin: 0 0.75em;
  padding: 0.75em;
  background-color: #ffd369;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    background-color: #eeeeee;
  }
`;

const Button = ({ text, target }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Button;
