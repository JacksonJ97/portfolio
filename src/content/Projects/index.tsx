import Github from "components/Icons/Github";
import ExternalLink from "components/Icons/ExternalLink";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string | null;
  sourceLink: string;
};

const projects: Project[] = [
  {
    title: "LeetCode Tracker",
    description:
      "A dashboard that turns solved LeetCode problems into a spaced repetition review schedule based on how confident you felt solving each one. Performance analytics highlight weak areas and recommend problems to practice next.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Hono", "PostgreSQL"],
    liveLink: "https://leetcode-tracker-gold.vercel.app/",
    sourceLink: "https://github.com/JacksonJ97/leetcode-tracker",
  },
  {
    title: "Pokemon Center Queue Detector",
    description:
      "A Python script that monitors Pokémon Center and sends a Discord alert as soon as it detects a virtual queue.",
    technologies: ["Python"],
    liveLink: null,
    sourceLink: "https://github.com/JacksonJ97/pokemon-center-queue-detector",
  },
  {
    title: "Crunchyroll Advanced Controls",
    description:
      "A Chrome extension that adds 1.25x, 1.5x, and 2x playback speeds directly to Crunchyroll's video player, with keyboard shortcuts to rewind or skip ahead.",
    technologies: ["TypeScript"],
    liveLink: null,
    sourceLink: "https://github.com/JacksonJ97/crunchyroll-advanced-controls",
  },
  {
    title: "Spacestagram",
    description:
      "An Instagram-style feed for NASA's Astronomy Picture of the Day. Browse past images in a continuous feed, save favorites, and share individual posts.",
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
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded border border-(--border-color) bg-(--background-surface-color) px-4 pt-4 pb-5">
      <div className="mb-1 flex items-center justify-between gap-1">
        <h3 className="text-lg font-medium">{project.title}</h3>

        <div className="flex items-center gap-1">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live site"
              className="p-2 transition-colors hover:text-(--primary-color)"
            >
              <ExternalLink className="size-4.5" />
            </a>
          )}
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="p-2 transition-colors hover:text-(--primary-color)"
          >
            <Github className="size-4.5" />
          </a>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-(--text-muted-color)">
        {project.description}
      </p>

      <ul className="flex flex-wrap items-center gap-2">
        {project.technologies.map((technology, index) => (
          <li className="rounded-md bg-(--background-subtle-color) px-2 py-1 text-xs" key={index}>
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="mb-6 font-fira-code text-2xl font-medium uppercase">Projects</h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
