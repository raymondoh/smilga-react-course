import React from "react";
//store
import { useDispatch, useSelector } from "react-redux";

const Stats = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user && user.name);
  return <div>Stats</div>;
};

export default Stats;
