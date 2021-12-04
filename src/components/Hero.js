import styled from "styled-components";

// Components
import Button from "./Utilities/Button";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .btns-container {
    margin: 2em 0;
  }
`;

const Hero = ({ id }) => {
  return (
    <Wrapper id={id}>
      <h1>hi, i'm jackson, a passionate frontend developer</h1>
      <p>an electrical engineering graduate looking to pursue a career in frontend development</p>
      <div className="btns-container">
        <Button text="View Resume" />
        <Button text="View Projects" target="projects" />
      </div>
    </Wrapper>
  );
};

export default Hero;
