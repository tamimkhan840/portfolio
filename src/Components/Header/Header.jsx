import  { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center fixed w-11/12 p-5 bg-slate-100/70 text-black">

      <h1 className="text-3xl font-bold">TAMIM <span className='text-green-700 '>KHAN</span></h1>

      {/* Larger screen links */}
      <nav className="hidden md:flex space-x-4">
        <a href="#Home" className="hover:text-red-700">Home</a>
        <a href="#about" className="hover:text-red-700">About</a>
        <a href="#projects" className="hover:text-red-700">Services</a>
        <a href="#contact" className="hover:text-red-700">Contact</a>
        <button className='bg-red-500 px-4 py-2 rounded-md'>
          Download CV
          </button>
      </nav>

      {/* Mobile menu icon */}
      {
        isOpen ? <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoClose size={24} />
        </button>
      </div> :<div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>
      </div>
      }

      {/* Dropdown menu for small devices */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-50 text-black transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center space-y-4 py-5">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-red-700">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-red-700">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-red-700">Services</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-red-700">Contact</a>
            <button>
              Download CV
            </button>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;
