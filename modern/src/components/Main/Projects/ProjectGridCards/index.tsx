import { data } from "../../../../data/data";
import Card from "../../../Cards";

const ProjectCardGrid = () => {
  return (
    <div className="grid w-[90%] gap-6 place-items-center [grid-template-columns:repeat(auto-fit,minmax(450px,1fr))] max-[520px]:[grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
      {data.map((element, index) => (
        <Card
          key={index}
          title={element.title}
          img={element.img}
          description={element.description}
          technologies={element.technologies}
          liveLink={element.liveLink}
          repoLink={element.repoLink}
        />
      ))}
    </div>
  );
};

export default ProjectCardGrid;
