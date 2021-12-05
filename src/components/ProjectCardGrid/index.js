import styled from "styled-components";

// Components
import Card from "../Utilities/Card";

// Project Data
import data from "../../data";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 580px 580px;
  gap: 24px;
  place-items: center;
`;

const ProjectCardGrid = () => {
  return (
    <Wrapper>
      <Card
        title={data.title}
        img={data.img}
        description={data.description}
        technologies={data.technologies}
        liveLink={data.liveLink}
        repoLink={data.repoLink}
      />
      <Card
        title={data.title}
        img={data.img}
        description={data.description}
        technologies={data.technologies}
        liveLink={data.liveLink}
        repoLink={data.repoLink}
      />
      <Card
        title={data.title}
        img={data.img}
        description={data.description}
        technologies={data.technologies}
        liveLink={data.liveLink}
        repoLink={data.repoLink}
      />
      <Card
        title={data.title}
        img={data.img}
        description={data.description}
        technologies={data.technologies}
        liveLink={data.liveLink}
        repoLink={data.repoLink}
      />
    </Wrapper>
  );
};

export default ProjectCardGrid;
