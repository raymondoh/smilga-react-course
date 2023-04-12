import React from "react";
import { IS_LOADING } from "../actions";

const auth_reducer = (state, action) => {
  switch (action.payload) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default auth_reducer;
