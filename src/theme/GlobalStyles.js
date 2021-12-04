import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth; 
  }

  a {
    text-decoration: none;
    color: #EEEEEE;
  }

  li {
    list-style: none;
  }

  body {
    background-color: #222831;
    color: #EEEEEE;
  }
`;

export default GlobalStyles;
