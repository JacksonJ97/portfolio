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
    display: flex;
    align-items: center;
    background-color: #eeeeee;
    color: #393e46;
    border-radius: 6px;
    padding: 0.5em;
    margin: 0 0.75em;
    width: 64px;
  }

  svg {
    font-size: 3rem;
    color: #393e46;
    background-color: #eeeeee;
    border-radius: 6px;
  }
`;

const Skills = ({ id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeader text="Skills" />
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 />
        </div>

        <div className="skill">
          <FaCss3Alt />
        </div>

        <div className="skill">
          <FaJsSquare />
        </div>

        <div className="skill">
          <FaSass />
        </div>

        <div className="skill">
          <FaReact />
        </div>

        <div className="skill">
          <FaGit />
        </div>

        <div className="skill">
          <FaPython />
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
