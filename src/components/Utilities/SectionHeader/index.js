import styled from "styled-components";

// Styles
const Header = styled.h2`
  font-size: 2rem;
  margin: 3em 0 2em 0;
`;

const SectionHeader = ({ text }) => {
  return <Header>{text}</Header>;
};

export default SectionHeader;
