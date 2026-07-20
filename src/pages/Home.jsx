import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main>
      <div className="home-page">
        <section className="home-content">
          <h2>
            Bonjour, je m'appelle <span>Rosa</span>
          </h2>
          <h3>Apprentie Développeur Web</h3>
          <p>
            J'apprends à construire des sites web en utilisant principalement
            React et Javascript
          </p>
          <p>Bienvenue dans mon portfolio</p>
          <div className="home-btns">
            <button>
              <Link to="/projects" target="_blank" rel="noopener noreferrer">
                Visiter mes projets
              </Link>
            </button>
            <button>
              <Link to="/aboutme" target="_blank" rel="noopener noreferrer">
                Voir mon profil
              </Link>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
