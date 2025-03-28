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
import SectionHeader from "../../SectionHeader";

const Skills = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex flex-col items-center">
      <SectionHeader text="Skills" />

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(70px,1fr))] gap-4 bg-[#393e46] p-12 rounded-md w-1/2 shadow-[0_0_16px_rgba(0,0,0,0.15)] max-[350px]:px-4">
        {[
          { icon: <FaHtml5 />, label: "HTML" },
          { icon: <FaCss3Alt />, label: "CSS" },
          { icon: <FaJsSquare />, label: "JavaScript" },
          { icon: <FaSass />, label: "Sass" },
          { icon: <FaReact />, label: "React" },
          { icon: <FaGit />, label: "Git" },
          { icon: <FaPython />, label: "Python" },
          { icon: <SiJest />, label: "Jest" },
        ].map(({ icon, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-[#eeeeee] text-[#393e46] rounded-md p-2 w-16 shadow-[0_0_12px_rgba(0,0,0,0.2)] text-[3rem]">
              {icon}
            </div>
            <p className="text-sm mt-2">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
