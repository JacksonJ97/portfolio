import reactIcon from "assets/images/skills/react.svg";
import tsIcon from "assets/images/skills/ts.svg";
import jsIcon from "assets/images/skills/js.svg";
import nextIcon from "assets/images/skills/next.svg";
import tanstackIcon from "assets/images/skills/tanstack.svg";
import htmlIcon from "assets/images/skills/html.svg";
import cssIcon from "assets/images/skills/css.svg";
import tailwindIcon from "assets/images/skills/tailwind.svg";
import pythonIcon from "assets/images/skills/python.svg";
import djangoIcon from "assets/images/skills/django.svg";
import nodeIcon from "assets/images/skills/node.svg";
import expressIcon from "assets/images/skills/express.svg";
import pgsqlIcon from "assets/images/skills/pgsql.svg";
import jestIcon from "assets/images/skills/jest.svg";
import testingLibraryIcon from "assets/images/skills/testing-library.png";
import vitestIcon from "assets/images/skills/vitest.svg";
import pytestIcon from "assets/images/skills/pytest.svg";
import gitIcon from "assets/images/skills/git.svg";
import githubIcon from "assets/images/skills/github.svg";
import dockerIcon from "assets/images/skills/docker.svg";
import vsCodeIcon from "assets/images/skills/vscode.svg";
import figmaIcon from "assets/images/skills/figma.svg";
import postmanIcon from "assets/images/skills/postman.svg";
import codexIcon from "assets/images/skills/codex.svg";

type Technology = {
  label: string;
  icon: string;
};

type Skill = {
  title: string;
  technologies: Technology[];
};

const skills: Skill[] = [
  {
    title: "Frontend",
    technologies: [
      { label: "React", icon: reactIcon },
      { label: "TypeScript", icon: tsIcon },
      { label: "JavaScript", icon: jsIcon },
      { label: "Next.js", icon: nextIcon },
      { label: "TanStack Query", icon: tanstackIcon },
      { label: "HTML", icon: htmlIcon },
      { label: "CSS", icon: cssIcon },
      { label: "Tailwind CSS", icon: tailwindIcon },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { label: "Python", icon: pythonIcon },
      { label: "Django", icon: djangoIcon },
      { label: "Node.js", icon: nodeIcon },
      { label: "Express.js", icon: expressIcon },
    ],
  },
  {
    title: "Databases",
    technologies: [{ label: "PostgreSQL", icon: pgsqlIcon }],
  },
  {
    title: "Testing",
    technologies: [
      { label: "Jest", icon: jestIcon },
      { label: "React Testing Library", icon: testingLibraryIcon },
      { label: "Vitest", icon: vitestIcon },
      { label: "Pytest", icon: pytestIcon },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { label: "Git", icon: gitIcon },
      { label: "GitHub", icon: githubIcon },
      { label: "Docker", icon: dockerIcon },
      { label: "VS Code", icon: vsCodeIcon },
      { label: "Figma", icon: figmaIcon },
      { label: "Postman", icon: postmanIcon },
      { label: "Codex", icon: codexIcon },
    ],
  },
];

function TechnologyTag({ label, icon }: Technology) {
  return (
    <div className="flex items-center gap-2 rounded border border-(--border-color) bg-(--background-surface-color) px-3 py-2">
      <img src={icon} alt={`${label} logo`} className="size-4" />
      <p className="text-xs font-medium text-(--text-color)">{label}</p>
    </div>
  );
}

function SkillList({ title, technologies }: Skill) {
  return (
    <div>
      <h3 className="font-fira-code mb-2 text-sm font-medium text-(--text-muted-color)">
        {title}
      </h3>
      <ul className="flex flex-wrap items-center gap-2">
        {technologies.map((technology, index) => (
          <li key={index}>
            <TechnologyTag label={technology.label} icon={technology.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="font-fira-code mb-4 text-2xl font-medium text-(--text-color) uppercase">
        Skills
      </h2>

      <div className="flex flex-col gap-4">
        {skills.map((item) => (
          <SkillList
            title={item.title}
            technologies={item.technologies}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
}
