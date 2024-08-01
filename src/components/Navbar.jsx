import logo from "../assets/Ananthlogo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/ananth-chaitanya-3626261a4/" rel="noopener" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/nitron18" rel="noopener" target="_blank">
        <FaGithub />
      </a>
      <a href="https://x.com/Ananth740340829?t=H7aceVicYQGAYbzDRbT31w&s=09" rel="noopener" target="_blank">
        <FaSquareXTwitter />
      </a>
      <a href="https://www.instagram.com/ananth.chaitanya?igsh=MTQyb2wzNWZ1OXhrNA==" rel="noopener" target="_blank">
        <FaInstagram />
      </a>
    </div>
  </nav>
}

export default Navbar