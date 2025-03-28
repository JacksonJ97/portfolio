import SectionHeader from "../../SectionHeader";
import ProjectCardGrid from "./ProjectGridCards";

const Projects = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex flex-col justify-start items-center">
      <SectionHeader text="Projects" />
      <ProjectCardGrid />
    </div>
  );
};

export default Projects;
