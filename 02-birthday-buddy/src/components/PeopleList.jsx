import React from "react";
import Person from "./Person";

const PeopleList = ({ people }) => {
  return (
    <section>
      {people.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </section>
  );
};

export default PeopleList;
