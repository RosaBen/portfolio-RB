import { Link } from "react-router-dom";

export default function Courses({ courses }) {
  const coursesCards = courses.map((c) => {
    const skillsList = c.skills.map((skill) => <li key={skill}>{skill}</li>);
    return (
      <div key={c.name} className={`${c.name} card`}>
        <h3>{c.name}</h3>
        <div className="card-infos">
          <img src={c.logo} alt={c.name} />
          <div>
            <h5>Description:</h5>
            <p>{c.description}</p>
            <ul>{skillsList}</ul>
          </div>
        </div>
        <div className="card-footer">
          <p>{c.date}</p>
          <a href={c.url} target="_blank" rel="noopener noreferrer">
            {c.name}
          </a>
        </div>
      </div>
    );
  });
  return (
    <main className="courses-page">
      <h2>Mes formations</h2>
      <div className="courses-cards">{coursesCards}</div>
    </main>
  );
}
