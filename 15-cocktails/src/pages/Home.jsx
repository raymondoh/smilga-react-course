import React from "react";
import { CocktailList, SearchForm } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <CocktailList />
    </React.Fragment>
  );
};

export default Home;
