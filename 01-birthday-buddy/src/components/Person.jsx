import React from "react";

const Person = ({ person }) => {
  return (
    <article>
      <img src={person.image} alt={person.name} className="img" style={{ width: "60%" }} />
      <h4>{person.name}</h4>
      <p>age: {person.age}</p>
    </article>
  );
};

export default Person;
