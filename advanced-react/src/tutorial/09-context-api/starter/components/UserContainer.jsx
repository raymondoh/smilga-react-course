//import React, { useContext } from "react";
//import { NavbarContext } from "./Navbar";
import { useAppContext } from "./Navbar";

const UserContainer = () => {
  //const { user, logout } = useContext(NavbarContext);
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {user && <p>Hello there, {user && user.name.toUpperCase()}</p>}
      <button onClick={logout} className="btn">
        logout
      </button>
    </div>
  );
};

export default UserContainer;
