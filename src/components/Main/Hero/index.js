import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Components
import Button from "../../Utilities/Button";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;
    text-align: center;
    width: 90%;
  }

  .highlight {
    color: #ffd369;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    width: 90%;
  }

  .btns-container {
    margin: 2em 0;
  }

  .links-container {
    display: flex;
    justify-content: center;
    font-size: 2rem;

    a {
      margin: 0 0.25em;
    }

    a:hover {
      color: #ffd369;
    }
  }

  @media (max-width: 370px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }

    .btns-container {
      display: flex;
      flex-direction: column;
      margin: 1.5em 0;

      button {
        margin: 0.75em 0;
      }
    }
  }
`;

const Hero = ({ id }) => {
  return (
    <Wrapper id={id}>
      <h1>Hello! I'm Jackson Jude.</h1>
      <p>
        I'm a <span className="highlight">Frontend Developer</span> who loves creating beautiful and interactive web applications.
      </p>
      <div className="btns-container">
        <Button text="View Resume" />
        <Button text="View Projects" target="projects" />
      </div>

      <div className="links-container">
        <a href="https://github.com/JacksonJ97" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/jacksonjude/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:jacksonjude97@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </Wrapper>
  );
};

export default Hero;
