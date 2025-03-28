import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../../../assets/resume/resume.pdf";
import Button from "../../Button";

const Hero = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-[3rem] mb-2 w-[90%] max-[370px]:text-[2.5rem]">
        Hello! I'm Jackson Jude.
      </h1>

      <p className="text-[1.5rem] w-[90%] max-[370px]:text-[1.25rem]">
        I'm a <span className="text-[#ffd369]">Frontend Developer</span> who
        loves creating beautiful and interactive web applications.
      </p>

      <div className="my-8 max-[370px]:my-6 flex flex-col max-[370px]:gap-3 gap-0">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="mb-3 max-[370px]:mb-0"
        >
          <Button text="View Resume" />
        </a>
        <a href="#projects">
          <Button text="View Projects" />
        </a>
      </div>

      <div className="flex justify-center text-2xl">
        <a
          href="https://github.com/JacksonJ97"
          target="_blank"
          rel="noreferrer"
          className="mx-1 hover:text-[#ffd369]"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jacksonjude/"
          target="_blank"
          rel="noreferrer"
          className="mx-1 hover:text-[#ffd369]"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:jacksonjude97@gmail.com"
          className="mx-1 hover:text-[#ffd369]"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Hero;
