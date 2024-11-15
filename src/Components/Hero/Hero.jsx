import profile from "../image/imd.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaTwitter} from "react-icons/fa";

function Hero() {
  return (
    <section id="Home" className="text-center py-20 bg-gradient-to-b">
      <div className="flex flex-col items-center">
        <img src={profile} alt="Tamim Khan" className="rounded-2xl w-60  mb-4" />
        <h2 className="text-2xl">Hi</h2>
        <h1 className="text-5xl md:text-7xl font-bold">
          It&apos;s <span className="text-green-700">Tamim Khan</span>
        </h1>
        <p className="text-2xl font-semibold mt-2">I&apos;m a Photographer</p>
        <p className="mt-4 w-11/12 md:w-8/12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate sit saepe perspiciatis culpa rerum atque inventore, minus ut voluptatem ipsam quibusdam doloremque corporis, possimus quaerat porro distinctio beatae unde magni quod deserunt officia impedit amet repellendus! Tempora voluptate rem praesentium dicta ratione iure suscipit.
        </p>

        {/* Social Media Icons */}
        <div >
          <ul className="flex justify-center space-x-3 md:space-x-8 mt-6">
            <li className="text-green-700 text-xl md:text-2xl hover:bg-green-700 hover:text-white hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href="https://www.facebook.com/hafeztamimkhan" target="_blank"><FaFacebook /></a>
            </li>
            <li className="text-green-700 text-xl md:text-2xl hover:bg-green-700 hover:text-white hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href="https://www.linkedin.com/in/tamim-khan-25aa7232b/" target="_blank"><FaLinkedin /></a>
            </li>
            <li className="text-green-700 text-xl md:text-2xl hover:bg-green-700 hover:text-white hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href="https://www.instagram.com/hafeztamimkhan/" target="_blank"><FaInstagram /></a>
            </li>
            <li className="text-green-700 text-xl md:text-2xl hover:bg-green-700 hover:text-white hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href="https://github.com/tamimkhan840" target="_blank"><FaGithub /></a>
            </li>
            <li className="text-green-700 text-xl md:text-2xl hover:bg-green-700 hover:text-white hover:scale-125 transition-transform border-[3px] border-green-700 p-2 rounded-full">
              <a href="https://x.com/MdTamimKhan1919" target="_blank"><FaTwitter /></a>
            </li>
          </ul>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Hire Me</button>
      </div>
    </section>
  );
}

export default Hero;
