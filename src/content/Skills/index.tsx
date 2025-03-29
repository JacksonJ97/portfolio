import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaReact,
  FaGit,
  FaPython,
} from "react-icons/fa";
import { SiJest } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaSass />, label: "Sass" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaGit />, label: "Git" },
  { icon: <FaPython />, label: "Python" },
  { icon: <SiJest />, label: "Jest" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-16 px-4 py-32 min-sm:px-8"
    >
      <h2 className="border-b border-yellow-400 pb-1 text-4xl">Skills</h2>

      <div className="flex max-w-max flex-wrap items-center justify-center gap-4 rounded-md bg-slate-600 p-6 min-sm:p-12">
        {skills.map((skill) => (
          <div className="flex flex-col items-center gap-2" key={skill.label}>
            <div className="rounded-md bg-white p-3 text-5xl text-slate-800">
              {skill.icon}
            </div>
            <p className="text-sm">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
