import Github from "components/Icons/Github";
import ExternalLink from "components/Icons/ExternalLink";

type Project = {
  title: string;
  yearBuilt: string;
  description: string;
  technologies: string[];
  liveLink: string;
  sourceLink: string;
};

const projects: Project[] = [
  {
    title: "Spacestagram",
    yearBuilt: "2025",
    description:
      "Spacestagram is an application that reimagines NASA's Astronomy Picture of the Day as an Instagram style feed. Users can explore space photography with modern social features like infinite scrolling, liking posts, sharing via link, and saving personal favorites.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Express.js",
      "PostgreSQL",
    ],
    liveLink: "https://spacestagram-tan.vercel.app/",
    sourceLink: "https://github.com/JacksonJ97/spacestagram",
  },
  {
    title: "Clothing Store",
    yearBuilt: "2021",
    description:
      "Clothing Store is an application that lets users browse products and manage a shopping cart with features like adding products, adjusting quantities, and removing products.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/clothing-store/",
    sourceLink: "https://github.com/JacksonJ97/clothing-store",
  },
  {
    title: "Resume Builder",
    yearBuilt: "2021",
    description:
      "Resume Builder is an application that transforms user inputs into a polished, formatted resume. Users can add or remove experience and education sections dynamically, and even load an example resume for inspiration.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/cv-application/",
    sourceLink: "https://github.com/JacksonJ97/cv-application",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded border border-(--border-color) bg-(--background-surface-color) px-4 pt-4 pb-5">
      <div className="mb-1 flex items-center justify-between gap-1">
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
            <Github className="size-4.5" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live site"
            className="p-2 text-(--text-color) transition-colors hover:text-(--primary-color)"
          >
            <ExternalLink className="size-4.5" />
          </a>
        </div>
      </div>

      <p className="mb-2 text-xs text-(--text-muted-color)">
        Built in {project.yearBuilt}
      </p>

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
    <section id="projects">
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
