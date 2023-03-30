import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ items, onRemoveItem, onEditItem }) => {
  const renderItems =
    items &&
    items.map(item => {
      return <SingleItem item={item} key={item.id} onRemoveItem={onRemoveItem} onEditItem={onEditItem} />;
    });
  return <div className="items">{renderItems}</div>;
};

export default ItemList;
