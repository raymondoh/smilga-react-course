import React, { useState } from "react";
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
//store
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";
import { logoutUser } from "../features/user/userSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector(state => state.user);
  const { isSidebarOpen } = useSelector(state => state.sidebar);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={() => toggle()}>
          <FaAlignLeft />
        </button>

        <Logo />
        {isSidebarOpen && <h3>Jobster</h3>}

        <h3 className="logo-text">dashboard</h3>

        <div className="btn-container">
          <button type="button" className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user && user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={() => dispatch(logoutUser("Logging out..."))}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
