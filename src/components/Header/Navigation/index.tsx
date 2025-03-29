import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

function DesktopNav() {
  return (
    <ul className="hidden min-sm:flex min-sm:gap-6">
      <li>
        <a href={`#projects`} className="text-xl hover:text-yellow-300">
          Projects
        </a>
      </li>
      <li>
        <a href={`#skills`} className="text-xl hover:text-yellow-300">
          Skills
        </a>
      </li>
      <li>
        <a href={`#about`} className="text-xl hover:text-yellow-300">
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
          className="text-2xl cursor-pointer"
        />
      ) : (
        <HiMenu
          onClick={() => setShowMenu(true)}
          className="text-2xl cursor-pointer"
        />
      )}

      {showMenu && (
        <ul className="absolute top-18 right-0 w-screen bg-slate-600 text-center">
          <li>
            <a
              href={`#projects`}
              className="text-xl hover:text-yellow-300 w-full block p-3"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={`#skills`}
              className="text-xl hover:text-yellow-300 w-full block p-3"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href={`#about`}
              className="text-xl hover:text-yellow-300 w-full block p-3"
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
