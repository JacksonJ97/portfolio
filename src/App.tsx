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
      <main className="page-container flex flex-col gap-6 py-6">
        <About />
        <div className="h-px bg-(--border-color)" aria-hidden="true" />
        <Work />
        <div className="h-px bg-(--border-color)" aria-hidden="true" />
        <Skills />
        <div className="h-px bg-(--border-color)" aria-hidden="true" />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
