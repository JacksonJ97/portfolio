import styled from "styled-components";

// Components
import SectionHeader from "./Utilities/SectionHeader";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="Contact" />
    </Wrapper>
  );
};

export default Contact;
