import styled from "styled-components";

// Components
import Card from "../../../Utilities/Card";

// Project Data
import data from "../../../../data";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 24px;
  width: 90%;
  place-items: center;

  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
`;

const ProjectCardGrid = () => {
  return (
    <Wrapper>
      {data.map((element, index) => (
        <Card
          title={element.title}
          img={element.img}
          description={element.description}
          technologies={element.technologies}
          liveLink={element.liveLink}
          repoLink={element.repoLink}
          key={index}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectCardGrid;
