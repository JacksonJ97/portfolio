import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const NavTitle = ({ title, target }: { title: string; target: string }) => {
  return (
    <li className="my-3 text-lg hover:text-[#ffd369] min-[550px]:my-0 min-[550px]:mx-4">
      <a href={`#${target}`}>{title}</a>
    </li>
  );
};

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex relative min-[550px]:hidden">
      {showMenu ? (
        <CgClose
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl mr-2.5 cursor-pointer"
        />
      ) : (
        <HiMenu
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl mr-2.5 cursor-pointer"
        />
      )}

      {showMenu && (
        <ul className="absolute top-12 right-[-20%] w-screen bg-[rgba(57,62,70,0.7)] text-center">
          <NavTitle title="Projects" target="projects" />
          <NavTitle title="Skills" target="skills" />
          <NavTitle title="About" target="about" />
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
