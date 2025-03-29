import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../../assets/resume/resume.pdf";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-[calc(100vh-72px)] flex-col items-center justify-center px-4 py-32 min-sm:px-8"
    >
      <h1 className="text-center text-4xl min-sm:text-5xl">
        Hello! I'm Jackson Jude.
      </h1>

      <p className="mt-8 max-w-prose text-center text-xl min-sm:text-2xl">
        I'm a{" "}
        <span className="text-yellow-400">Full Stack Software Engineer</span>{" "}
        who loves creating beautiful and interactive web applications.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <a href={resume} target="_blank" rel="noreferrer">
          <Button text="Resume" />
        </a>
        <a href="#projects">
          <Button text="Projects" />
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-3xl">
        <a
          href="https://github.com/JacksonJ97"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jacksonjude/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:jacksonjude97@gmail.com"
          className="hover:text-yellow-400"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
