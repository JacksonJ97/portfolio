import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-8 text-center mt-32 bg-[#393e46] text-[#EEEEEE]">
      <div className="flex justify-center text-3xl mb-2 gap-1 items-center">
        <a
          href="https://github.com/JacksonJ97"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jacksonjude/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:jacksonjude97@gmail.com" className="hover:text-primary">
          <FaEnvelope />
        </a>
      </div>
      <p className="my-1">Built and designed by Jackson Jude</p>
      <p className="opacity-70 text-xs">Last Updated: January 22, 2022</p>
    </footer>
  );
}
