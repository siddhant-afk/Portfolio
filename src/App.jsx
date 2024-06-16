import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
function App() {

  return (
    <div className="container text-white">

      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>


  )
}

export default App
