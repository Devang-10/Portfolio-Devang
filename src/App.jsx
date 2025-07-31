import "./App.css";
import { Navbar } from "./components/Navbar"; 
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Coding } from "./components/CodingProfiles";
import { useEffect, useState } from "react"; 
import Contact from "./components/Contact";

function App() {
  // Ensure 'isLoaded' state is either declared or its usage removed from the div
  // If you intend to use it later, declare it like so:
  const [isLoaded, setIsLoaded] = useState(false); // If you plan to use this
  // Or simply remove it from the class if not needed:
  // <div className="app">

  return (
    <div>
      {" "}
      {/* Adjust based on your 'isLoaded' decision */}
      <Navbar /> {/* Uncomment this line */}
      <Hero />
      <Projects />
      <div className="flex-container">
        <Coding />
        <div className="section-divider"></div>
        <Contact />
      </div>
      {/* Your footer here */}
    </div>
  );
}

export default App;
