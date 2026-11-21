import resume from "assets/resume.pdf";
import { LinkButton } from "components/link-button";
import { Mail } from "components/icons/mail";
import { GitHub } from "components/icons/github";
import { Download } from "components/icons/download";
import { Linkedin } from "components/icons/linkedin";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <h2 className="mb-4 font-fira-code text-2xl font-medium uppercase">About Me</h2>

      <p className="mb-4 text-sm leading-relaxed">
        I'm Jackson Jude, a{" "}
        <span className="text-(--primary-color)">full stack software engineer</span> with 3+ years
        of experience building web products. I take a product-first approach and work across the
        stack, with a focus on frontend development.
      </p>

      <p className="mb-4 text-sm leading-relaxed">
        I studied electrical engineering before moving into software. I enjoy taking products from
        concept to launch and improving them after release.
      </p>

      <p className="mb-8 text-sm leading-relaxed">
        <strong className="font-semibold">Fun fact</strong> · I've ranked in the top 1% in 3
        competitive games: League of Legends, Valorant, and Teamfight Tactics.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <LinkButton href="mailto:jacksonjude97@gmail.com">
          <Mail className="size-4" aria-hidden="true" />
          Email
        </LinkButton>
        <LinkButton href={resume}>
          <Download className="size-4" aria-hidden="true" />
          Resume
        </LinkButton>
        <LinkButton href="https://github.com/JacksonJ97">
          <GitHub className="size-4" aria-hidden="true" />
          GitHub
        </LinkButton>
        <LinkButton href="https://www.linkedin.com/in/jacksonjude/">
          <Linkedin className="size-4" aria-hidden="true" />
          LinkedIn
        </LinkButton>
      </div>
    </section>
  );
}
