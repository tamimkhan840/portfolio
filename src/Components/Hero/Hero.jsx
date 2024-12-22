import profile from "../image/imd.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaTwitter} from "react-icons/fa";
import {motion, useScroll} from 'framer-motion'
import { useEffect, useState } from "react";

function Hero() {
  const [images, setImages] = useState([
    {
      url: "https://i.postimg.cc/L5HmpNhf/Screenshot-2024-12-22-234735.png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/V6w8qDqT/Screenshot-2024-12-22-234713.png",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/jSJ0BGvm/Screenshot-2024-12-22-234317.png",
      top: "55%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/XJLTw37G/Screenshot-2024-12-22-234111.png",
      top: "60%",
      left: "30%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/g0P5QrxL/Screenshot-2024-12-22-234042.png",
      top: "62%",
      left: "70%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/gjrB8ZTQ/Screenshot-2024-12-22-233939.png",
      top: "62%",
      left: "25%",
      isActive: false,
    },
    {
      url: "https://i.postimg.cc/Pq467yG0/screencapture-eloquent-puffpuff-909923-netlify-app-2024-12-22-23-37-52.png",
      top: "57%",
      left: "75%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();


  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (data) => {
      const imagesShow = (arr) => {
        setImages((prev) =>
          prev.map((item, index) =>
            arr.includes(index)
              ? { ...item, isActive: true }
              : { ...item, isActive: false }
          )
        );
      };

      switch (Math.floor(data * 100)) {
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 2:
          imagesShow([0, 1]);
          break;
        case 3:
          imagesShow([0, 1, 2]);
          break;
        case 4:
          imagesShow([0, 1, 2, 3]);
          break;
        case 5:
          imagesShow([0, 1, 2, 3, 4]);
          break;
        case 6:
          imagesShow([0, 1, 2, 3, 4, 5]);
          break;
        case 7:
          imagesShow([0, 1, 2, 3, 4, 5, 6]);
          break;

        default:
          break;
      }
    });

    return () => unsubscribe(); // Clean up listener
  }, [scrollYProgress]);

  return (
    <section id="Home" className="text-center py-20 bg-gradient-to-b relative">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute z-50`}
          style={{
            top: image.top,
            left: image.left,
            opacity: image.isActive ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${image.isActive ? 1.2 : 0.8})`,
            transition: "all 0.5s ease",
          }}
        >
          <img className="w-56 rounded-md" src={image.url} alt="" />
        </motion.div>
      ))}
      <div className="flex flex-col items-center">
        <img src={profile} alt="Tamim Khan" className="rounded-2xl w-60  mb-4" />
        <h2 className="text-2xl">Hi</h2>

        <h1 className="text-5xl md:text-7xl font-bold">
          It&apos;s <span className="text-green-700">Tamim Khan</span>
        </h1>
        <div className="text-2xl font-semibold mt-2">I&apos;m a
          <div className="text-animation text-[34px] font-semibold min-w-[280px] relative mb-6">
            <span className="relative before:content-['Web Developer'] text-green-700 before:text-[var(--main-color)] before:animate-words after:absolute after:bg-[var(--bg-color)] after:h-full after:right-[-8px] after:border-l-[2px] after:border-[#f1f1f1] after:animate-cursor after:w-[calc(100%+8px)]"></span>
          </div>
        </div>
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
