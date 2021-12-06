import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact, FaGit, FaPython } from "react-icons/fa";

// Components
import SectionHeader from "./Utilities/SectionHeader";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .skills-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #393e46;
    padding: 4em;
    border-radius: 6px;
  }

  .skill {
    p {
      font-size: 0.875rem;
      text-align: center;
      margin: 0.5em 0;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    background-color: #eeeeee;
    color: #393e46;
    border-radius: 6px;
    padding: 0.5em;
    margin: 0 1em;
    width: 64px;
  }

  svg {
    font-size: 3rem;
  }
`;

const Skills = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="Skills" />
      <div className="skills-container">
        <div className="skill">
          <div className="icon">
            <FaHtml5 />
          </div>
          <p>HTML</p>
        </div>

        <div className="skill">
          <div className="icon">
            <FaCss3Alt />
          </div>
          <p>CSS</p>
        </div>

        <div className="skill">
          <div className="icon">
            <FaJsSquare />
          </div>
          <p>JavaScript</p>
        </div>

        <div className="skill">
          <div className="icon">
            <FaSass />
          </div>
          <p>Sass</p>
        </div>

        <div className="skill">
          <div className="icon">
            <FaReact />
          </div>
          <p>React</p>
        </div>

        <div className="skill">
          <div className="icon">
            <FaGit />
          </div>
          <p>Git</p>
        </div>

        <div className="skill">
          <div className="icon">
            <FaPython />
          </div>
          <p>Python</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
