import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = id => {
    console.log(id);
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };

  const clearNames = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>useState array example</h2>
      {people.map(person => {
        return (
          <div key={person.id}>
            <h1>{person.name}</h1>
            <button className="btn" onClick={() => removePerson(person.id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: "3rem" }} onClick={clearNames}>
        clear all names
      </button>
    </div>
  );
};

export default UseStateArray;
