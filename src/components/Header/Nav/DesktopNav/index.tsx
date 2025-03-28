const NavTitle = ({ title, target }: { title: string; target: string }) => {
  return (
    <li className="my-3 text-lg hover:text-[#ffd369] min-[550px]:my-0 min-[550px]:mx-4">
      <a href={`#${target}`}>{title}</a>
    </li>
  );
};

const DesktopNav = () => {
  return (
    <ul className="hidden min-[550px]:flex">
      <NavTitle title="Projects" target="projects" />
      <NavTitle title="Skills" target="skills" />
      <NavTitle title="About" target="about" />
    </ul>
  );
};

export default DesktopNav;
