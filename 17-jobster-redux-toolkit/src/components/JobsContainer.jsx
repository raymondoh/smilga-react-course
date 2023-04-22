import React, { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../features/job/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const { isLoading, jobs, page, totalJobs, numOfPages } = useSelector(state => state.allJobs);

  const dispatch = useDispatch();

  const renderJobs =
    jobs &&
    jobs.map(job => {
      return <Job key={job._id} job={job} />;
    });

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "'s"}
      </h5>

      <div className="jobs">{renderJobs}</div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
