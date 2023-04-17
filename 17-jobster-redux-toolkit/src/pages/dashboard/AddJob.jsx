import React from "react";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
//store
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearValues } from "../../features/job/jobSlice";
handleChange;

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector(state => state.job);
  const dispatch = useDispatch();

  const handleJobInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/** Position field */}
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="position"
            id="position"
            value={position}
            handleChange={handleJobInput}
            autoComplete="true"
            labelText="Position"
          />
          {/** Company field */}
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="company"
            id="company"
            value={company}
            handleChange={handleJobInput}
            autoComplete="true"
            labelText="Company"
          />
          {/** Job Location field */}
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="jobLocation"
            id="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
            autoComplete="true"
            labelText="Job Location"
          />
          {/** Status field */}
          {/**props: name, labelText, id, value, handleChange, list */}
          <FormRowSelect
            name="status"
            id="status"
            labelText="Status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/** Job Type field */}
          {/**props: name, labelText, id, value, handleChange, list */}
          <FormRowSelect
            name="jobType"
            id="jobType"
            labelText="Job Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn" onClick={() => dispatch(clearValues())}>
              clear
            </button>
            <button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit} disabled={isLoading}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
