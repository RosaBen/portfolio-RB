// React
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";

// Import components
import Navbar from "./components/Navbar";

// scripts

import { skills } from "./assets/scripts/data.js";
// CSS
import "./assets/styles/navbar.css";
import "./assets/styles/home.css";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
        <div className="animated-border"></div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
