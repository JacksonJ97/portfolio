import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-slate-800/60 px-6 py-4">
      <a
        href="#hero"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-800"
      >
        JJ
      </a>
      <Navigation />
    </header>
  );
}
