import { Header } from "components/header";
import { Footer } from "components/footer";
import About from "content/about";
import Work from "content/work";
import Skills from "content/skills";
import Projects from "content/projects";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-prose px-4 py-8">
        <About />
        <div className="my-6 h-px bg-(--border-color)" />
        <Work />
        <div className="my-6 h-px bg-(--border-color)" />
        <Skills />
        <div className="my-6 h-px bg-(--border-color)" />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
