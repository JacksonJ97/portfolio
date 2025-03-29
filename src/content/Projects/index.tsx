import { data } from "../../data/data";
import Card from "../../components/Card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-16 px-4 py-32 min-sm:px-8"
    >
      <h2 className="border-b border-yellow-400 pb-1 text-4xl">Projects</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {data.map((element) => (
          <Card
            title={element.title}
            description={element.description}
            technologies={element.technologies}
            liveLink={element.liveLink}
            repoLink={element.repoLink}
            key={element.id}
          />
        ))}
      </div>
    </section>
  );
}
