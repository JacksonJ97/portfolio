import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact, FaGit, FaPython } from "react-icons/fa";
import { SiJest } from "react-icons/si";

// Components
import SectionHeader from "../../Utilities/SectionHeader";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 1em;
    background-color: #393e46;
    padding: 3em;
    border-radius: 6px;
    width: 50%;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.15);
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 0.875rem;
      margin-top: 0.5em;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    background-color: #eeeeee;
    color: #393e46;
    border-radius: 6px;
    padding: 0.5em;
    width: 64px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 3rem;
  }

  @media (max-width: 350px) {
    .skills-container {
      padding: 3em 1em;
    }
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

        <div className="skill">
          <div className="icon">
            <SiJest />
          </div>
          <p>Jest</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
