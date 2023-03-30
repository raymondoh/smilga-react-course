import React, { useState } from "react";

const Form = ({ onAddColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onAddColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        <input type="text" value={color} onChange={e => setColor(e.target.value)} placeholder="#f15025" />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
