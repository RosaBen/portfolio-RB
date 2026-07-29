// images projects
import recipe from "../images/recipepage.jpg";
import blog from "../images/traveljourney.jpg";
import businessC from "../images/businesscard.jpg";
import chefClaude from "../images/chefClaude.jpg";
import memeGen from "../images/memeGenerator.jpg";
import tenzies from "../images/tenzies.webp";

// images logos from courses

import cef from "../images/cef.jpg";
import oclock from "../images/oclock.jpg";
import scrimba from "../images/scrimba.jpg";
import thp from "../images/thp.jpg";
import wcs from "../images/wildcodeschool.jpg";

// skills
export const skills = ["HTML&CSS", "Javascript", "React", "Node.js", "Git", "Vite"];

// my projects
export const projects = [
  {
    title: "Recette d'une omelette",
    description: "page statique - Recette d'une omelette",
    image: recipe,
    linkToWebsite: "https://gregarious-cat-a98983.netlify.app/",
    linktoGithub: "https://github.com/RosaBen/RB-recipePage",
    skills: ["HTML&CSS"]
  },
  {
    title: "Carte professionnelle",
    description: "page dynamique- Exemple de carte professionnelle",
    image: businessC,
    linkToWebsite: "https://rosabenbusinesscard.netlify.app/",
    linktoGithub: "https://github.com/RosaBen/RB-businesscard",
    skills: ["HTML&CSS", "Javascript", "React"]
  },
  {
    title: "Blog voyage",
    description: "page dynamique - liste de sites touristiques",
    image: blog,
    linkToWebsite: "https://traveljourneyrb.netlify.app/",
    linktoGithub: "https://github.com/RosaBen/travel-journal",
    skills: ["HTML&CSS", "Javascript", "React"]
  }, {
    title: "Chef Claude",
    description: "page dynamique- api - Créer une recette de cuisine avec les ingrédients disponibles",
    image: chefClaude,
    linkToWebsite: "https://chefclauderb.netlify.app/",
    linktoGithub: "https://github.com/RosaBen/rb-chef-claude",
    skills: ["HTML&CSS", "Javascript", "React", "API"]
  }, {
    title: "Generateur de meme",
    description: "page dynamique - api - Génerer des memes avec modification de texte",
    image: memeGen,
    linkToWebsite: "https://memegenerator-rb.netlify.app/",
    linktoGithub: "https://github.com/RosaBen/meme-generator-rb",
    skills: ["HTML&CSS", "Javascript", "React", "API"]
  },
  {
    title: "Jouer à Tenzies",
    description: "page dynamique - Récupérer les 10 chiffres pareils",
    image: tenzies,
    linkToWebsite: "https://tenzies-rb.netlify.app/",
    linktoGithub: "https://github.com/RosaBen/tenzies-rb",
    skills: ["HTML&CSS", "Javascript", "React"]
  },
];

// My courses
export const courses = [
  {
    logo: scrimba,
    name: "Scrimba",
    description: "C'est un site en ligne pour apprendre pas à pas la programmation web et mobile. J'aime beaucoup les cours qui sont très bien expliqué avec des minis challenges corrigés par IA. Je recommande très fortement ce site où j'ai pu comprendre pas mal de choses en pratiquant",
    skills: ["HTML&CSS", "Javascript", "React"],
    date: "octobre 2025 - en cours",
    url: "https://scrimba.com/"
  },
  {
    logo: cef,
    name: "Centre Européen de Formation",
    description: "C'est mon école en ce moment, nous apprenons à notre rythme avec les ressources proposées. Je suis sur le module React que je trouve très léger comparé aux autre écoles. Pour le moment, j'arrive à faire mes devoirs. ",
    skills: ["HTML&CSS", "Javascript", "Bootstrap"],
    date: "mars 2026 - en cours",
    url: "https://www.centre-europeen-formation.fr/"
  },
  {
    logo: thp,
    name: "The Hacking Project",
    description: "C'était ma 3èem école. J'ai encore perfectionné les basiques et j'ai appris un nouveau language : Ruby. J'ai fait du back end avec Rails 8. J'ai beaucoup aimé Ruby. C'est une école en peer to peer, on se corrigeait entre nous. J'ai appris un peu plus sur le web3",
    skills: ["HTML&CSS", "Javascript", "Bootstrap", "API", "Ruby", "Rails8"],
    date: "mai 2025 - octobre 2025",
    url: "https://thehackingproject.org/"
  },
  {
    logo: wcs,
    name: "Wild Code School",
    description: "C'était ma seconde école. J'ai perfectionné les basiques comme HTML, CSS, Javascript, Bootstrap. J'ai aussi appris React. C'est une aussi très bonne école, j'ai aussi avancé avec cette école, mieux compris certaines choses",
    skills: ["HTML&CSS", "Javascript", "Bootstrap", "API", "React", "Node.js"],
    date: "mai 2024 - octobre 2024",
    url: "https://www.wildcodeschool.com/"
  },
  {
    logo: oclock,
    name: "O'Clock",
    description: "C'était ma toute première formation intensive. J'ai appris les basiques comme HTML, CSS, Javascript, Bootstrap. J'ai ensuite choisi le module PHP pour le reste de la formation. C'est une très bonne école, mais je n'arrivais pas à suivre parce que c'était intensif",
    skills: ["HTML&CSS", "Javascript", "Bootstrap", "API", "PHP", "Symfony"],
    date: "mai 2023 - octobre 2023",
    url: "https://oclock.io/"
  },




];