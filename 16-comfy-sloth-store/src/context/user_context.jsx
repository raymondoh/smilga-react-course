import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();
// make sure use
const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value="user context">{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider, useUserContext };
