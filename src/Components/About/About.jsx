import profile from "../image/imd.png";

function About() {
  return (
    <section id="about" className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 items-center px-9 ">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">About <span className="text-green-700">Me</span></h2>
        <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium cum libero iste aspernatur culpa.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Read More</button>
      </div>
      <div>
       <img src={profile} alt="Tamim Khan" className="rounded-3xl  my-4 mx-auto" />
      </div>
    </section>
  );
}

export default About;
