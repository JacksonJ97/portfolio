import htmlIcon from "assets/images/skills/html.svg";
import cssIcon from "assets/images/skills/css.svg";
import jsIcon from "assets/images/skills/js.svg";
import tsIcon from "assets/images/skills/ts.svg";
import pythonIcon from "assets/images/skills/python.svg";
import sqlIcon from "assets/images/skills/sql.svg";
import reactIcon from "assets/images/skills/react.svg";
import nextIcon from "assets/images/skills/next.svg";
import djangoIcon from "assets/images/skills/django.svg";
import nodeIcon from "assets/images/skills/node.svg";
import expressIcon from "assets/images/skills/express.svg";
import tailwindIcon from "assets/images/skills/tailwind.svg";
import tanstackIcon from "assets/images/skills/tanstack.svg";
import pgsqlIcon from "assets/images/skills/pgsql.svg";
import gitIcon from "assets/images/skills/git.svg";
import githubIcon from "assets/images/skills/github.svg";
import figmaIcon from "assets/images/skills/figma.svg";
import postmanIcon from "assets/images/skills/postman.svg";

const items = [
  {
    title: "Languages",
    skills: [
      { label: "HTML", icon: htmlIcon },
      { label: "CSS", icon: cssIcon },
      { label: "JavaScript", icon: jsIcon },
      { label: "TypeScript", icon: tsIcon },
      { label: "Python", icon: pythonIcon },
      { label: "SQL", icon: sqlIcon },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { label: "React", icon: reactIcon },
      { label: "Next.js", icon: nextIcon },
      { label: "Django", icon: djangoIcon },
      { label: "Node.js", icon: nodeIcon },
      { label: "Express.js", icon: expressIcon },
      { label: "TailwindCSS", icon: tailwindIcon },
      { label: "TanStack Query", icon: tanstackIcon },
    ],
  },
  {
    title: "Databases",
    skills: [{ label: "PostgreSQL", icon: pgsqlIcon }],
  },
  {
    title: "Tools",
    skills: [
      { label: "Git", icon: gitIcon },
      { label: "GitHub", icon: githubIcon },
      { label: "Figma", icon: figmaIcon },
      { label: "Postman", icon: postmanIcon },
    ],
  },
];

function Tag({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 rounded border border-(--border-color) bg-(--surface-color) px-3 py-2">
      <img src={icon} alt={`${label} logo`} className="h-4 w-4" />
      <p className="text-xs font-medium text-(--text-color)">{label}</p>
    </div>
  );
}

function List({
  title,
  skills,
}: {
  title: string;
  skills: { label: string; icon: string }[];
}) {
  return (
    <div>
      <h3 className="font-fira-code mb-2 text-sm font-medium text-(--text-muted-color)">
        {title}
      </h3>
      <ul className="flex flex-wrap items-center gap-2">
        {skills.map((skill, index) => (
          <li key={index}>
            <Tag label={skill.label} icon={skill.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="font-fira-code mb-4 text-2xl font-medium uppercase">
        Skills
      </h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <List title={item.title} skills={item.skills} key={item.title} />
        ))}
      </div>
    </section>
  );
}
