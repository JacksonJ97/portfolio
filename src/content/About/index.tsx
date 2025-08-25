import resume from "assets/resume/resume.pdf";
import LinkButton from "components/LinkButton";
import Mail from "components/Icons/Mail";
import Download from "components/Icons/Download";
import Github from "components/Icons/Github";
import Linkedin from "components/Icons/Linkedin";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <h2 className="font-fira-code mb-4 text-2xl font-medium uppercase">
        About Me
      </h2>

      <p className="mb-8 text-sm leading-relaxed">
        I'm Jackson Jude, a full stack software engineer, who loves building web
        applications. I'm an Electrical Engineering graduate making a career
        switch into software development. With a focus in frontend development,
        I'm passionate about producing elegant and polished user interfaces
        efficiently and effectively. When I'm not working on web applications, I
        can be found playing competitive games or engaging in new hobbies with
        friends. I enjoy solving problems through code, and I'm looking forward
        to work alongside amazing programmers!
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <LinkButton
          href="mailto:jacksonjude97@gmail.com"
          className="flex items-center gap-2"
        >
          <Mail className="h-4 w-4 text-(--text-muted-color)" />
          Email
        </LinkButton>
        <LinkButton href={resume} className="flex items-center gap-2">
          <Download className="h-4 w-4 text-(--text-muted-color)" />
          Resume
        </LinkButton>
        <LinkButton
          href="https://github.com/JacksonJ97"
          className="flex items-center gap-2"
        >
          <Github className="h-4 w-4 text-(--text-muted-color)" />
          GitHub
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/jacksonjude/"
          className="flex items-center gap-2"
        >
          <Linkedin className="h-4 w-4 text-(--text-muted-color)" />
          LinkedIn
        </LinkButton>
      </div>
    </section>
  );
}
