import cvImg from "./assets/images/cv-app-icon.svg";
import portfolioImg from "./assets/images/portfolio-icon.svg";
import pokemonImg from "./assets/images/pokemon-icon.svg";
import weatherImg from "./assets/images/weather-icon.svg";
import teaImg from "./assets/images/tea-icon.svg";
import booksImg from "./assets/images/books-icon.svg";

const projectData = [
  {
    title: "CV Application",
    description:
      "A resume builder application that takes the user's inputs and displays a formatted resume. Users can add or delete any number of experiences and education. Users can also load an example resume.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/cv-application/",
    repoLink: "https://github.com/JacksonJ97/cv-application",
    img: cvImg,
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website to share some details about myself, showcase my projects, and to give access to my contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/portfolio/",
    repoLink: "https://github.com/JacksonJ97/portfolio",
    img: portfolioImg,
  },
  {
    title: "Pokemon Memory Game",
    description:
      "A memory game where a user's score is increased depending on the number of unique pokemons clicked. If users click on the same pokemon their score is resetted.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/memory-card/",
    repoLink: "https://github.com/JacksonJ97/memory-card",
    img: pokemonImg,
  },
  {
    title: "Weather Application",
    description:
      "A weather application that takes a user's input of a city and displays the corresponding weather information. Users can also switch the units to celsius or fahrenheit.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jacksonj97.github.io/weather-app/",
    repoLink: "https://github.com/JacksonJ97/weather-app",
    img: weatherImg,
  },
  {
    title: "Jack's Cafe",
    description:
      "A fake restaurant website that contains a tabbing system to switch between the contents of the home, menu, and contact sections.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jacksonj97.github.io/restaurant-page/",
    repoLink: "https://github.com/JacksonJ97/restaurant-page",
    img: teaImg,
  },
  {
    title: "Library Application",
    description:
      "A library application that takes a information of books and displays it as cards. Users can add or remove the cards and they can also toggle whether if the book was read or unread.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://jacksonj97-library-app.vercel.app/",
    repoLink: "https://github.com/JacksonJ97/library-app",
    img: booksImg,
  },
];

export default projectData;
