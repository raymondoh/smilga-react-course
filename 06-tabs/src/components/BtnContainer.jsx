import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  const renderJobs = jobs.map((job, index) => {
    return (
      <button
        key={job.id}
        className={index === currentItem ? "job-btn active-btn" : "job-btn"}
        onClick={() => setCurrentItem(index)}>
        {job.company}
      </button>
    );
  });

  return <div className="btn-container">{renderJobs}</div>;
};

export default BtnContainer;
