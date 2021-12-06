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
    max-width: 1200px;
    line-height: 1.5;
  }

  @media (max-width: 635px) {
    p {
      font-size: 1rem;
      padding: 1.5em;
      width: 90%;
    }
  }
`;

const About = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="About Me" />
      <p>
        I'm an Electrical Engineering graduate making a career switch into software development. With a focus in frontend development, I'm
        passionate about producing elegant and polished user interfaces efficiently and effectively. When I'm not working on web
        applications, I can be found playing competitive games or engaging in new hobbies with friends. I enjoy solving problems through
        code, and I'm excited to work alongside other amazing programmers!
      </p>
    </Wrapper>
  );
};

export default About;
