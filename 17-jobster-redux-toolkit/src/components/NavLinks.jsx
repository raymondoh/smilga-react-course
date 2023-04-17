import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = toggleSidebar => {
  return (
    <div className="nav-links">
      {links &&
        links.map(link => {
          const { text, path, icon, id } = link;
          return (
            <NavLink
              end
              key={id}
              to={path}
              onClick={toggleSidebar}
              className={({ isActive }) => {
                return isActive ? "nav-link active" : "nav-link";
              }}>
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      ;
    </div>
  );
};

export default NavLinks;
