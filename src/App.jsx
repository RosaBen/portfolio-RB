// Import components
import Navbar from "./components/Navbar";

// CSS
import "./assets/styles/navbar.css";
function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
        <div className="animated-border"></div>
      </header>
    </div>
  );
}

export default App;
