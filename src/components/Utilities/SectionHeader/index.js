import styled from "styled-components";

// Styles
const Header = styled.h2`
  margin: 3em 0;
`;

const SectionHeader = ({ text }) => {
  return <Header>{text}</Header>;
};

export default SectionHeader;
