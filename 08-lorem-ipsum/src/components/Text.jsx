import React from "react";

const Text = ({ text }) => {
  return (
    <article className="lorem-ipsum">
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </article>
  );
};

export default Text;
