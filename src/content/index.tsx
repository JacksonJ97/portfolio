import About from "content/About";
import Skills from "content/Skills";
import Work from "content/Work";
import Projects from "content/Projects";

export default function Content() {
  return (
    <main className="mx-auto max-w-prose px-4 py-8">
      <About />
      <div className="my-6 h-px bg-(--border-color)" />
      <Work />
      <div className="my-6 h-px bg-(--border-color)" />
      <Skills />
      <div className="my-6 h-px bg-(--border-color)" />
      <Projects />
    </main>
  );
}
