import styled from "styled-components";

// Styles
const Header = styled.h2`
  font-size: 2rem;
  margin: calc(55px + 1.5em) 0 1.5em 0;
  border-bottom: 1px solid #ffd369;
  padding-bottom: 0.15em;
`;

const SectionHeader = ({ text }) => {
  return <Header>{text}</Header>;
};

export default SectionHeader;
