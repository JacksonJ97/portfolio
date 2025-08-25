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
    <div className="rounded border border-(--border-color) bg-(--surface-color) px-4 py-5">
      <h3 className="mb-2 text-lg font-medium text-(--text-color)">
        {project.title}
      </h3>

      <p className="mb-2 text-sm leading-relaxed text-(--text-muted-color)">
        {project.description}
      </p>

      <div className="mb-4 flex items-center gap-2">
        <a
          href={project.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-(--text-color) underline transition-colors hover:text-(--primary-color)"
        >
          Source
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-(--text-color) underline transition-colors hover:text-(--primary-color)"
        >
          Live
        </a>
      </div>

      <ul className="flex flex-wrap items-center gap-2">
        {project.technologies.map((technology, index) => (
          <li
            className="rounded border border-(--border-color) px-3 py-2 text-xs text-(--text-color)"
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
    <section id="projects">
      <h2 className="font-fira-code mb-6 text-2xl font-medium uppercase">
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
