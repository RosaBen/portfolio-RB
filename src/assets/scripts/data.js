import recipe from "../images/recipepage.jpg";
import blog from "../images/traveljourney.jpg";
import businessC from "../images/businesscard.jpg";
import chefClaude from "../images/chefClaude.jpg";
import memeGen from "../images/memeGenerator.jpg";

export const skills = ["HTML&CSS", "Javascript", "React", "Node.js", "Git", "Vite"];

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
];