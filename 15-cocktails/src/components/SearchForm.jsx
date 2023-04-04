import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const searchValue = useRef();
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
    console.log(searchValue);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="namme">search your favourite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
