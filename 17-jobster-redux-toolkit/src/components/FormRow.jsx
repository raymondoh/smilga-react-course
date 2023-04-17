import React from "react";

//{props} = dynamic values on the label and input
//<div className="form-row">
//<label htmlFor="name" className="form-label"> name</label>
//<input type="text" name="name" id="" value={values.name} onChange={handleChange} className="form-input" />
//</div>

const FormRow = ({ type, name, value, handleChange, labelText, autoComplete }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default FormRow;
