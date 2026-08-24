import { Link } from "react-router-dom";
export default function LinkList() {
  return (
    <ul>
      <li>
        <Link to="/" target="_blank" rel="noopener noreferrer">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/aboutme" target="_blank" rel="noopener noreferrer">
          A propos de moi
        </Link>
      </li>
      <li>
        <Link to="/projects" target="_blank" rel="noopener noreferrer">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/courses" target="_blank" rel="noopener noreferrer">
          Formations
        </Link>
      </li>
    </ul>
  );
}
