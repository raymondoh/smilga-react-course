import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menu }) => {
  const renderMenu =
    menu &&
    menu.map(item => {
      return <MenuItem key={item.id} item={item} />;
    });
  return <div className="section-center">{renderMenu}</div>;
};

export default MenuList;
