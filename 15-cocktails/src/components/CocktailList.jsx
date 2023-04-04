import React from "react";
import { useGlobalContext } from "../context/context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  console.log(cocktails);

  const renderList =
    cocktails &&
    cocktails.map(item => {
      return <Cocktail key={item.id} item={item} />;
    });

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No cocktails matched your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">{renderList}</div>
    </section>
  );
};

export default CocktailList;
