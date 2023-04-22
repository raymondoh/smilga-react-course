import React from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect } from ".";
import { clearFilters, handleChange } from "../features/job/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector(state => state.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector(state => state.job);
  const dispatch = useDispatch();

  const handleSearch = e => {
    //check loading
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/** Search field */}
          {/**props: type, name, value, handleChange, labelText */}
          <FormRow
            type="text"
            name="search"
            id="search"
            value={search}
            handleChange={handleSearch}
            autoComplete="true"
            labelText="Search..."
          />

          {/** Status field */}
          {/**props: name, labelText, id, value, handleChange, list */}
          <FormRowSelect
            type="select"
            name="searchStatus"
            id="searchStatus"
            labelText="Status"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/** Search type field */}
          {/**props: name, labelText, id, value, handleChange, list */}
          <FormRowSelect
            type="select"
            name="searchType"
            id="searchType"
            labelText="Job Type"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/** Sort */}
          {/**props: name, labelText, id, value, handleChange, list */}
          <FormRowSelect
            type="sort"
            name="sort"
            id="searchType"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button type="submit" onClick={handleSubmit} className="btn btn-block btn-danger" disabled={isLoading}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
