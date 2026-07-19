// Import pages
import Home from "./pages/Home";

// Import components
import Navbar from "./components/Navbar";

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
        <Home />
      </main>
    </div>
  );
}

export default App;
