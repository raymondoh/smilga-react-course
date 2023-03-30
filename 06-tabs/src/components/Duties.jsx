import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  const renderDuties = duties.map((duty, index) => {
    const id = uuidv4();

    return (
      <div key={id} className="job-desc">
        <FaAngleDoubleLeft className="job-icon" />
        <p>{duty}</p>
      </div>
    );
  });
  return <React.Fragment>{renderDuties}</React.Fragment>;
};

export default Duties;
