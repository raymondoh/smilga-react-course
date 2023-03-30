import React, { useState } from "react";
import data from "../data";
import Text from "./Text";
const Form = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="lorem-ipsum">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <Text text={text} />
    </React.Fragment>
  );
};

export default Form;
