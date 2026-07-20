export default function Projects({ projects }) {
  const projectsCards = projects.map((p, index) => {
    const skillsList = p.skills.map((skill) => <li key={skill}>{skill}</li>);

    return (
      <div key={index} className={`card${index + 1} card`}>
        <h3>{p.title}</h3>
        <div className="card-infos">
          <img src={p.image} alt={p.title} />
          <div>
            <h5>Description:</h5>
            <p>{p.description}</p>
            <ul>{skillsList}</ul>
          </div>
        </div>
        <div className="card-btns">
          <button>
            <a href={p.linkToWebsite}>Voir mon site</a>
          </button>
          <button>
            <a href={p.linktoGithub}>Repo Github</a>
          </button>
        </div>
      </div>
    );
  });
  return (
    <main className="projects-page">
      <h2>Projets</h2>
      <div className="projects-cards">{projectsCards}</div>
    </main>
  );
}
