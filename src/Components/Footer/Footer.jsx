
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-700 text-white text-center py-6">
      <div className="flex justify-center space-x-6 mb-4 w-11/12 mx-auto">
        {/* Social Media Icons */}
        <ul className="flex justify-center space-x-3 md:space-x-8 mt-6">
            <li className="text-green-100 text-xl md:text-2xl hover:bg-green-100 hover:text-green-700 hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href=""><FaFacebook /></a>
            </li>
            <li className="text-green-100 text-xl md:text-2xl hover:bg-green-100 hover:text-green-700 hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href=""><FaLinkedin /></a>
            </li>
            <li className="text-green-100 text-xl md:text-2xl hover:bg-green-100 hover:text-green-700 hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href=""><FaInstagram /></a>
            </li>
            <li className="text-green-100 text-xl md:text-2xl hover:bg-green-100 hover:text-green-700 hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href=""><FaGithub /></a>
            </li>
            <li className="text-green-100 text-xl md:text-2xl hover:bg-green-100 hover:text-green-700 hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href=""><FaTwitter /></a>
            </li>
          </ul>
      </div>

      <div className="flex justify-center space-x-4 my-4">
        <a href="#faq">FAQ</a>
        <a href="#services">Services</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
        <a href="#privacy-policy">Privacy Policy</a>
      </div>
      <p>&copy; 2024 Tamim Khan | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
