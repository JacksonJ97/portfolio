import styled from "styled-components";

// Styles
const Wrapper = styled.li`
  display: inline-block;
  border: 1px solid #222831;
  color: #eeeeee;
  font-size: 0.875rem;
  padding: 0.5em;
  margin: 0.25em 0.5em 0.25em 0;
  border-radius: 6px;
`;

const TechBox = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default TechBox;
