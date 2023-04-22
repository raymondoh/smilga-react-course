import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import "./JobInfo";
import JobInfo from "./JobInfo";
import { deleteJob, setEditJob } from "../features/job/jobSlice";
setEditJob;
const Job = ({ job }) => {
  const { _id, position, company, jobLocation, jobType, createdAt, status } = job;
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/dashboard/addjob"
              className="btn edit-btn"
              onClick={() =>
                dispatch(setEditJob({ editJobId: _id, position, company, job, jobLocation, jobType, status }))
              }>
              edit
            </Link>
            <button type="button" className="btn delete-btn" onClick={() => dispatch(deleteJob(_id))}>
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
