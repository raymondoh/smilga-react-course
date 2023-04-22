import React, { useEffect } from "react";
import { Loading, StatsContainer, ChartsContainer } from "../../components";
//store
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/job/allJobsSlice";

const Stats = () => {
  const { user } = useSelector(state => state.user);
  const { isLoading, monthlyApplications } = useSelector(state => state.allJobs);
  const dispatch = useDispatch();
  console.log(user && user.name);

  useEffect(() => {
    dispatch(showStats());
  }, []);
  return (
    <React.Fragment>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </React.Fragment>
  );
};

export default Stats;
