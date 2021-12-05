import styled from "styled-components";

// Components
import SectionHeader from "./Utilities/SectionHeader";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.25rem;
    background-color: #393e46;
    border-radius: 6px;
    padding: 3em;
    width: 80%;
  }
`;

const About = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="About Me" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Wrapper>
  );
};

export default About;
