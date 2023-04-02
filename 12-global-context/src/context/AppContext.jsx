import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

// custom hook
const useGlobalContext = () => useContext(GlobalContext);

const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("peter");
  return <GlobalContext.Provider value={{ name, setName }}>{children}</GlobalContext.Provider>;
};

export { useGlobalContext, AppContextProvider, GlobalContext };
