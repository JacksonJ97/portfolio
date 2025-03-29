import Navigation from "./Navigation";

function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between py-4 px-6 bg-slate-800/60">
      <a
        href="#hero"
        className="flex items-center justify-center rounded-full w-10 h-10 bg-white text-slate-800 text-xl"
      >
        JJ
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
