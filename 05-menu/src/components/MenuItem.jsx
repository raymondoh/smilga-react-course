import React from "react";

const MenuItem = ({ item }) => {
  return (
    <article className="menu-item">
      <img src={item.img} alt={item.title} className="img" />
      <div className="item-info">
        <header>
          <h5>{item.title}</h5>
          <span className="item-price">{item.price}</span>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
