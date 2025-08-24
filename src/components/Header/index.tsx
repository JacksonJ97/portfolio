function Link({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-(--text-color) transition-colors hover:text-(--primary-color)"
    >
      {text}
    </a>
  );
}

export default function Header() {
  return (
    <header className="px-4 py-6">
      <nav>
        <ul className="flex items-center justify-end gap-2">
          <li>
            <Link href="#about" text="About" />
          </li>
          <li>
            <Link href="#skills" text="Skills" />
          </li>
          <li>
            <Link href="#work" text="Work" />
          </li>
          <li>
            <Link href="#projects" text="Projects" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
