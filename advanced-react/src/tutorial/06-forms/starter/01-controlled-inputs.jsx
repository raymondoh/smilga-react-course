import { useState } from "react";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // do something
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name=""
          id="name"
          className="form-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Name
        </label>
        <input
          type="email"
          name=""
          id="email"
          className="form-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
