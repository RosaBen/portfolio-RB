export default function About({ skills }) {
  const skillsList = skills.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <main className="about-section">
      <section className="about-me">
        <h2>Mon histoire</h2>
        <p>
          C'est en travaillant en tant qu'agent Tier 2 Service Client pour un
          logiciel SAAS que j'ai découvert ce métier de la programmation.
        </p>
        <p>
          Je devais remonter les bugs détaillés à l'équipe produit et petit à
          petit je commençais à comprendre certaines informations et le
          fonctionnement de certains code.
        </p>
        <p>
          J'ai donc décidé de me reconvertir dans la création de site web. Ce
          portfolio contient mes mini projets que j'ai construit avec aide des
          formateurs et camarades de classe.
        </p>
      </section>
      <section className="about-skills">
        <h2>Mes compétences techniques</h2>
        <ul>{skillsList}</ul>
      </section>
    </main>
  );
}
