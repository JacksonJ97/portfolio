import styled from "styled-components";

// Styles
const Wrapper = styled.li`
  display: inline-block;
  border: 1px solid #222831;
  background-color: #eeeeee;
  color: #222831;
  font-size: 0.875rem;
  padding: 0.5em;
  margin: 0.25em 0.5em 0.25em 0;
  border-radius: 6px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
`;

const TechBox = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default TechBox;
