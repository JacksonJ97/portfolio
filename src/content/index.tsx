// import Projects from "./Projects";
import About from "content/About";
import Skills from "content/Skills";

export default function Content() {
  return (
    <main className="mx-auto max-w-prose px-4 py-10">
      <About />
      <div className="my-6 h-0.25 bg-(--border-color)" />
      <Skills />
      <div className="my-6 h-0.25 bg-(--border-color)" />
      {/* <Projects /> */}
    </main>
  );
}
