import spaceImg from "../assets/images/space-icon.svg";
import clothingImg from "../assets/images/clothing-icon.svg";
import cvImg from "../assets/images/cv-app-icon.svg";

export const data = [
  {
    id: 1,
    title: "Spacestagram",
    description:
      "An image sharing application that displays NASA's Astronomy Picture of the Day in the style of an instagram feed. Users can like and share the pictures. Users can also view all of their liked pictures.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/spacestagram/",
    repoLink: "https://github.com/JacksonJ97/spacestagram",
    img: spaceImg,
  },
  {
    id: 2,
    title: "Clothing Store",
    description:
      "A clothing store website that allows users to browse through products and add them to a shopping cart. In the shopping cart, users can increase/decrease the quantity, remove the item, and/or checkout.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/clothing-store/",
    repoLink: "https://github.com/JacksonJ97/clothing-store",
    img: clothingImg,
  },
  {
    id: 3,
    title: "CV Application",
    description:
      "A resume builder that takes the user's inputs and displays a formatted resume. Users can add/delete any number of experience and education fields. Users can also load an example resume.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jacksonj97.github.io/cv-application/",
    repoLink: "https://github.com/JacksonJ97/cv-application",
    img: cvImg,
  },
];
