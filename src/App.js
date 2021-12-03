// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Styles
import GlobalStyles from "./theme/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
      <div>Hello World!</div>
    </>
  );
};

export default App;
