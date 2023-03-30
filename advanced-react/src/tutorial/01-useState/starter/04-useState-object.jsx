import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: "", age: null, hobby: "" });

  const showPerson = () => {
    setPerson({
      name: "Diana",
      age: 34,
      hobby: "singing",
    });
  };
  return (
    <div>
      <h2>useState object example</h2>
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.hobby}</h3>
      </div>
      <button className="btn" onClick={showPerson}>
        show person
      </button>
    </div>
  );
};

export default UseStateObject;
