import { useContext } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Work from "./components/Work";
import Toggle from "./components/Toggle"

import { ThemeContext } from "./context";
import ProductList from "./components/ProductList";

import Footer from "./components/footer";
// import Contact from "./components/contact/Contact";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#0a192f" : "#F3F3F3",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <Toggle />
      <Home />
      <About />
      <ProductList />
   
      {/* <Skills /> */}
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
