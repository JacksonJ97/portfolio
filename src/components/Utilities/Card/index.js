import styled from "styled-components";

// Components
import TechBox from "./TechBox";
import Button from "../Button";

// Styles
const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  background-color: #393e46;
  padding: 2em;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.15);

  img {
    width: 30%;
    min-width: 160px;
    align-self: center;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin: 1em 0 12.5px 0;
    word-break: break-word;
    max-width: 450px;
  }

  ul {
    margin-bottom: 1em;
  }

  button {
    margin: 0 0.5em 0 0;
    font-size: 1.125rem;
    padding: 0.5em;
  }

  @media (max-width: 520px) {
    img {
      display: none;
    }
  }
`;

const Card = ({ title, img, description, technologies, liveLink, repoLink }) => {
  return (
    <Wrapper>
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <ul>
          {technologies.map((tech, index) => (
            <TechBox text={tech} key={index} />
          ))}
        </ul>
        <div>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <Button text="Live" />
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            <Button text="Repo" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
