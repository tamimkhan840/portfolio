import profile from "../image/imd.png";

function About() {
  return (
    <section
      id="about"
      className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-9"
    >
      {/* Left Section */}
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          About <span className="text-green-700">Me</span>
        </h2>
          <div className="text-animation text-[34px] font-semibold min-w-[280px] relative mb-6">
            <span className="relative before:content-['Youtube'] before:text-[var(--main-color)] before:animate-words after:absolute after:bg-[var(--bg-color)] after:h-full after:right-[-8px] after:border-l-[2px] after:border-[#f1f1f1] after:animate-cursor after:w-[calc(100%+8px)]"></span>
          </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          laudantium cum libero iste aspernatur culpa.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition duration-300">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center">
        <img
          src={profile}
          alt="Tamim Khan"
          className="rounded-3xl shadow-lg max-w-full w-96 h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default About;
