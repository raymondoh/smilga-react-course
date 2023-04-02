import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">Strapi</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      {/** links */}
    </nav>
  );
};

export default Navbar;
