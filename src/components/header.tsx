function Link({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="block rounded py-1 font-fira-code uppercase transition-colors hover:text-(--primary-color) focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white xs:px-1"
    >
      {text}
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 bg-(--background-color) py-4">
      <nav className="page-container">
        <ul className="flex flex-wrap items-center justify-end gap-2">
          <li>
            <Link href="#about" text="About" />
          </li>
          <li>
            <Link href="#work" text="Work" />
          </li>
          <li>
            <Link href="#skills" text="Skills" />
          </li>
          <li>
            <Link href="#projects" text="Projects" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
