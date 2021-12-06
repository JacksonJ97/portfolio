import styled from "styled-components";

// Components
import SectionHeader from "./Utilities/SectionHeader";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background-color: #393e46;
    border-radius: 6px;
    padding: 3em;
    width: 80%;
    max-width: 1200px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }

  @media (max-width: 635px) {
    div {
      padding: 1.5em;
      width: 90%;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const About = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="About Me" />
      <div>
        <p>
          I'm an Electrical Engineering graduate making a career switch into software development. With a focus in frontend development, I'm
          passionate about producing elegant and polished user interfaces efficiently and effectively. When I'm not working on web
          applications, I can be found playing competitive games or engaging in new hobbies with friends. I enjoy solving problems through
          code, and I'm excited to work alongside other amazing programmers!
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
