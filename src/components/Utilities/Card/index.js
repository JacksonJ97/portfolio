import styled from "styled-components";

// Components
import TechBox from "./TechBox";

// Styles
const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  background-color: #393e46;
  padding: 2em;
  border-radius: 6px;
  width: 100%;
  height: 100%;

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

  .links {
    padding: 0.75em 0;
  }

  a {
    background-color: #ffd369;
    color: #222831;
    padding: 0.75em;
    margin-right: 0.5em;
    border-radius: 6px;
  }

  a:hover {
    background-color: #eeeeee;
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
          {technologies.map((tech) => (
            <TechBox text={tech} />
          ))}
        </ul>
        <div className="links">
          <a href={liveLink} target="_blank" rel="noreferrer">
            Live
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            Repo
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
