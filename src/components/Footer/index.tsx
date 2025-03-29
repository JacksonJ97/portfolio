import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-8 text-center bg-slate-600">
      <div className="flex justify-center text-3xl gap-3 mb-4 items-center">
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
      <p className="mb-1">Built and designed by Jackson Jude</p>
      <p className="opacity-80 text-xs">Last Updated: January 22, 2022</p>
    </footer>
  );
}

export default Footer;
