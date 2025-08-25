import Github from "components/Icons/Github";
import ExternalLink from "components/Icons/ExternalLink";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  sourceLink: string;
};

const projects: Project[] = [
  {
    title: "Spacestagram",
    description:
      "An image sharing application that displays NASA's Astronomy Picture of the Day in the style of an instagram feed. Users can like and share the pictures. Users can also view all of their liked pictures.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/spacestagram/",
    sourceLink: "https://github.com/JacksonJ97/spacestagram",
  },
  {
    title: "Clothing Store",
    description:
      "A clothing store website that allows users to browse through products and add them to a shopping cart. In the shopping cart, users can increase/decrease the quantity, remove the item, and/or checkout.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/clothing-store/",
    sourceLink: "https://github.com/JacksonJ97/clothing-store",
  },
  {
    title: "CV Application",
    description:
      "A resume builder that takes the user's inputs and displays a formatted resume. Users can add/delete any number of experience and education fields. Users can also load an example resume.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/cv-application/",
    sourceLink: "https://github.com/JacksonJ97/cv-application",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded border border-(--border-color) bg-(--background-surface-color) px-4 py-5">
      <div className="mb-2 flex items-center justify-between gap-1">
        <h3 className="text-lg font-medium text-(--text-color)">
          {project.title}
        </h3>

        <div className="flex items-center gap-1">
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="p-2 text-(--text-color) transition-colors hover:text-(--primary-color)"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live site"
            className="p-2 text-(--text-color) transition-colors hover:text-(--primary-color)"
          >
            <ExternalLink className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-(--text-muted-color)">
        {project.description}
      </p>

      <ul className="flex flex-wrap items-center gap-2">
        {project.technologies.map((technology, index) => (
          <li
            className="rounded-md bg-(--background-subtle-color) px-2 py-1 text-xs text-(--text-color)"
            key={index}
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="font-fira-code mb-6 text-2xl font-medium text-(--text-color) uppercase">
        Projects
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
