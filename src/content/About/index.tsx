import resume from "assets/resume/resume.pdf";
import LinkButton from "components/LinkButton";
import Mail from "components/Icons/Mail";
import Download from "components/Icons/Download";
import Github from "components/Icons/Github";
import Linkedin from "components/Icons/Linkedin";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <h2 className="font-fira-code mb-4 text-2xl font-medium text-(--text-color) uppercase">
        About Me
      </h2>

      <p className="mb-4 text-sm leading-relaxed text-(--text-color)">
        I'm Jackson Jude, a{" "}
        <span className="text-(--primary-color)">
          full stack software engineer
        </span>{" "}
        with 3+ years of professional experience, specializing in product
        development. While I lean toward frontend, I take a product-first
        approach, whether that means crafting polished interfaces, optimizing
        backend systems, or owning end-to-end features.
      </p>

      <p className="mb-4 text-sm leading-relaxed text-(--text-color)">
        Originally an Electrical Engineering graduate, I transitioned into
        software to pursue my passion for building impactful web applications.
        Inspired by stories of teams creating products that changed how people
        connect with technology, I'm most excited about contributing to a
        product's journey from concept to launch and beyond.
      </p>

      <p className="mb-8 text-sm leading-relaxed text-(--text-color)">
        Outside of development, I enjoy exploring music, watching anime, and
        playing competitive games. I also value connecting with friends, whether
        that's discovering new restaurants, staying active with sports, or
        enjoying familiar pastimes.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <LinkButton
          href="mailto:jacksonjude97@gmail.com"
          className="flex items-center gap-2"
        >
          <Mail className="size-4 text-(--text-muted-color)" />
          Email
        </LinkButton>
        <LinkButton href={resume} className="flex items-center gap-2">
          <Download className="size-4 text-(--text-muted-color)" />
          Resume
        </LinkButton>
        <LinkButton
          href="https://github.com/JacksonJ97"
          className="flex items-center gap-2"
        >
          <Github className="size-4 text-(--text-muted-color)" />
          GitHub
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/jacksonjude/"
          className="flex items-center gap-2"
        >
          <Linkedin className="size-4 text-(--text-muted-color)" />
          LinkedIn
        </LinkButton>
      </div>
    </section>
  );
}
