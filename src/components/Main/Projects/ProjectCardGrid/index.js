import styled from "styled-components";

// Components
import Card from "../../../Utilities/Card";

// Project Data
import data from "../../../../data";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  width: 80%;
  place-items: center;
`;

const ProjectCardGrid = () => {
  return (
    <Wrapper>
      {data.map((element) => (
        <Card
          title={element.title}
          img={element.img}
          description={element.description}
          technologies={element.technologies}
          liveLink={element.liveLink}
          repoLink={element.repoLink}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectCardGrid;
