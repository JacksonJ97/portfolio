import logo from "../../assets/images/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex items-center justify-between py-3 bg-[rgba(57,62,70,0.7)] text-[#eeeeee]">
      <a
        href="#hero"
        className="flex items-center justify-center p-1 bg-[#eeeeee] rounded-full ml-5"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 rounded-full bg-[#eeeeee] text-[#222831]"
        />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
