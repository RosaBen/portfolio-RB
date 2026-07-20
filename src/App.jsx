// React
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// Import components
import Navbar from "./components/Navbar";

// scripts
import { skills, projects } from "./assets/scripts/data.js";

// CSS
import "./assets/styles/navbar.css";
import "./assets/styles/home.css";
import "./assets/styles/about.css";

// App
function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
        <div className="animated-border"></div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About skills={skills} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;
