import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>Rosa Benchabane</h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/aboutme">A propos de moi</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/courses">Formations</Link>
        </li>
      </ul>
    </nav>
  );
}
