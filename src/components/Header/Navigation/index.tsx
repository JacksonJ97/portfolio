import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

function DesktopNav() {
  return (
    <ul className="hidden min-sm:flex min-sm:gap-6">
      <li>
        <a href={`#projects`} className="text-xl hover:text-yellow-400">
          Projects
        </a>
      </li>
      <li>
        <a href={`#skills`} className="text-xl hover:text-yellow-400">
          Skills
        </a>
      </li>
      <li>
        <a href={`#about`} className="text-xl hover:text-yellow-400">
          About
        </a>
      </li>
    </ul>
  );
}

function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex min-sm:hidden">
      {showMenu ? (
        <CgClose
          onClick={() => setShowMenu(false)}
          className="cursor-pointer text-2xl"
        />
      ) : (
        <HiMenu
          onClick={() => setShowMenu(true)}
          className="cursor-pointer text-2xl"
        />
      )}

      {showMenu && (
        <ul className="absolute top-18 right-0 w-screen bg-slate-600 text-center">
          <li>
            <a
              href={`#projects`}
              className="block w-full p-3 text-xl hover:text-yellow-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={`#skills`}
              className="block w-full p-3 text-xl hover:text-yellow-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href={`#about`}
              className="block w-full p-3 text-xl hover:text-yellow-400"
            >
              About
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}

export default Navigation;
