import type { ComponentType, SVGProps } from "react";

import { React } from "components/icons/react";
import { TypeScript } from "components/icons/typescript";
import { JavaScript } from "components/icons/javascript";
import { Nextjs } from "components/icons/next";
import { TanStack } from "components/icons/tanstack";
import { HTML5 } from "components/icons/html";
import { CSS } from "components/icons/css";
import { TailwindCSS } from "components/icons/tailwindcss";
import { Python } from "components/icons/python";
import { Django } from "components/icons/django";
import { Nodejs } from "components/icons/node";
import { Expressjs } from "components/icons/express";
import { Hono } from "components/icons/hono";
import { PostgreSQL } from "components/icons/postgresql";
import { Jest } from "components/icons/jest";
import { TestingLibrary } from "components/icons/testing-library";
import { Vitest } from "components/icons/vitest";
import { Pytest } from "components/icons/pytest";
import { Git } from "components/icons/git";
import { GitHub } from "components/icons/github";
import { Docker } from "components/icons/docker";
import { VisualStudioCode } from "components/icons/vscode";
import { Figma } from "components/icons/figma";
import { Postman } from "components/icons/postman";
import { Codex } from "components/icons/codex";
import { ClaudeCode } from "components/icons/claude-code";

type Technology = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type Skill = {
  title: string;
  technologies: Technology[];
};

const skills: Skill[] = [
  {
    title: "Frontend",
    technologies: [
      { label: "React", icon: React },
      { label: "TypeScript", icon: TypeScript },
      { label: "JavaScript", icon: JavaScript },
      { label: "Next.js", icon: Nextjs },
      { label: "TanStack Query", icon: TanStack },
      { label: "HTML", icon: HTML5 },
      { label: "CSS", icon: CSS },
      { label: "Tailwind CSS", icon: TailwindCSS },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { label: "Python", icon: Python },
      { label: "Django", icon: Django },
      { label: "Node.js", icon: Nodejs },
      { label: "Express.js", icon: Expressjs },
      { label: "Hono", icon: Hono },
    ],
  },
  {
    title: "Databases",
    technologies: [{ label: "PostgreSQL", icon: PostgreSQL }],
  },
  {
    title: "Testing",
    technologies: [
      { label: "Jest", icon: Jest },
      { label: "React Testing Library", icon: TestingLibrary },
      { label: "Vitest", icon: Vitest },
      { label: "Pytest", icon: Pytest },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { label: "Git", icon: Git },
      { label: "GitHub", icon: GitHub },
      { label: "Docker", icon: Docker },
      { label: "VS Code", icon: VisualStudioCode },
      { label: "Figma", icon: Figma },
      { label: "Postman", icon: Postman },
      { label: "Codex", icon: Codex },
      { label: "Claude Code", icon: ClaudeCode },
    ],
  },
];

function TechnologyTag({ label, icon: Icon }: Technology) {
  return (
    <div className="flex items-center gap-2 rounded border border-(--border-color) bg-(--background-surface-color) px-3 py-2">
      <Icon aria-hidden="true" className="size-4" />
      <p className="text-xs font-medium">{label}</p>
    </div>
  );
}

function SkillList({ title, technologies }: Skill) {
  return (
    <div>
      <h3 className="mb-2 font-fira-code text-sm font-medium text-(--text-muted-color)">{title}</h3>
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
      <h2 className="mb-4 font-fira-code text-2xl font-medium uppercase">Skills</h2>

      <div className="flex flex-col gap-4">
        {skills.map((item) => (
          <SkillList title={item.title} technologies={item.technologies} key={item.title} />
        ))}
      </div>
    </section>
  );
}
