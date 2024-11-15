import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";


function App() {
  return (
    <div className="bg-gray-100 text-gray-900 ">
     <div className="">
     <div className="w-11/12 mx-auto">
        <Header />
     </div>
      <Hero />
      <div className="bg-green-100">
          <About />
      </div>

      <Projects />
      <Contact />
      <Footer />
     </div>
    </div>
  );
}

export default App;
