import styled from "styled-components";

// Components
import TechBox from "./TechBox";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #393e46;
  padding: 2em;
  border-radius: 6px;
  width: 100%;

  img {
    width: 50%;
    border-radius: 6px;
  }

  h4 {
    margin: 0 0.5em 0.75em 0.5em;
  }

  p {
    margin: 0.75em 0.5em;
  }

  .links {
    margin: 1em 0;
    text-align: center;
  }

  a {
    background-color: #ffd369;
    color: #222831;
    padding: 0.75em;
    margin: 0.5em;
    border-radius: 6px;
  }

  a:hover {
    background-color: #eeeeee;
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
