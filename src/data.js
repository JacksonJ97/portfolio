import clothingImg from "./assets/images/clothing-icon.svg";
import cvImg from "./assets/images/cv-app-icon.svg";
import portfolioImg from "./assets/images/portfolio-icon.svg";
import pokemonImg from "./assets/images/pokemon-icon.svg";
import weatherImg from "./assets/images/weather-icon.svg";
import teaImg from "./assets/images/tea-icon.svg";

const projectData = [
  {
    title: "Clothing Store",
    description:
      "A clothing store website that allows users to browse through products and add them to a shopping cart. In the shopping cart, users can increase/decrease the quantity, remove the item, and checkout.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/clothing-store/",
    repoLink: "https://github.com/JacksonJ97/clothing-store",
    img: clothingImg,
  },
  {
    title: "CV Application",
    description:
      "A resume builder that takes the user's inputs and displays a formatted resume. Users can add/delete any number of experience and education fields. Users can also load an example resume.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/cv-application/",
    repoLink: "https://github.com/JacksonJ97/cv-application",
    img: cvImg,
  },
  {
    title: "Weather Application",
    description:
      "A weather application that takes a user's input of a city and displays the corresponding weather information. Users can also switch the units to either imperial or metric.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jacksonj97.github.io/weather-app/",
    repoLink: "https://github.com/JacksonJ97/weather-app",
    img: weatherImg,
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website where I can showcase my projects and where people can learn more about me. This also serves as a resource for people to connect with me!",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io",
    repoLink: "https://github.com/JacksonJ97/jacksonj97.github.io",
    img: portfolioImg,
  },
  {
    title: "Jack's Cafe",
    description:
      "A restaurant website suitable for a small business that contains a tabbing system to switch between the contents of the home, menu, and contact sections.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jacksonj97.github.io/restaurant-page/",
    repoLink: "https://github.com/JacksonJ97/restaurant-page",
    img: teaImg,
  },
  {
    title: "Pokemon Memory Game",
    description:
      "A memory game where a user's score is increased depending on the number of unique pokemons clicked. If users click on the same pokemon their score is reset.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/memory-card/",
    repoLink: "https://github.com/JacksonJ97/memory-card",
    img: pokemonImg,
  },
];

export default projectData;
