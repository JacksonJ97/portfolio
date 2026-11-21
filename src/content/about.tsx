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
        of professional experience, specializing in product development. While I lean toward
        frontend, I take a product-first approach, whether that means crafting polished interfaces,
        optimizing backend systems, or owning end-to-end features.
      </p>

      <p className="mb-4 text-sm leading-relaxed">
        Originally an Electrical Engineering graduate, I transitioned into software to pursue my
        passion for building impactful web applications. Inspired by stories of teams creating
        products that changed how people connect with technology, I'm most excited about
        contributing to a product's journey from concept to launch and beyond.
      </p>

      <p className="mb-8 text-sm leading-relaxed">
        Outside of development, I enjoy exploring music, watching anime, and playing competitive
        games. I also value connecting with friends, whether that's discovering new restaurants,
        staying active with sports, or enjoying familiar pastimes.
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
