import logo from "../assets/pasindulogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="h-25 w-40" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
    </div>
  </nav>
  );
};

export default Navbar;