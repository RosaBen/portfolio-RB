export default function About({ skills }) {
  const skillsList = skills.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <main className="about-section">
      <h2>A propos de moi</h2>
      <section className="about-me">
        <h3>Mon histoire</h3>
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
        <h3>Mes compétences techniques</h3>
        <ul>{skillsList}</ul>
      </section>
    </main>
  );
}
