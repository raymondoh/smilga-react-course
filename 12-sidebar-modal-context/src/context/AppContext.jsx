import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

// custom hook
const useGlobalContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openSidebar = () => {
  //   setIsSidebarOpen((prev) => {
  //     return !prev
  //   })
  // }

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider value={{ isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, useGlobalContext, AppContextProvider };
