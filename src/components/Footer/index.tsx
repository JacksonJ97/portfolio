import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-600 p-8 text-center">
      <div className="flex items-center justify-center gap-3 text-3xl">
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
      <p className="mt-4">Built and designed by Jackson Jude</p>
      <p className="mt-1 text-xs opacity-80">Last Updated: January 22, 2022</p>
    </footer>
  );
}
