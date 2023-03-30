import React from "react";

const Categories = ({ categories, filterCategories }) => {
  const renderCategories =
    categories &&
    categories.map(category => {
      return (
        <button key={category} type="button" className="btn" onClick={() => filterCategories(category)}>
          {category}
        </button>
      );
    });

  return <div className="btn-container">{renderCategories}</div>;
};

export default Categories;
