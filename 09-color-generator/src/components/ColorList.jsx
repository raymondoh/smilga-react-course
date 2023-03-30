import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  console.log(colors);
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} key={nanoid()} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
