import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
function App() {

  return (
    <div className="container text-white">

      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
    </div>


  )
}

export default App
