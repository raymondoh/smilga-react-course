import React from "react";
import "./App.css";
import { About, Footer, Hero, Navbar, Services, Tours } from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
};

export default App;
