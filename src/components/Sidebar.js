import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className="p-3 ps-3 sidebar">
      <div>
        <Link exact to="/">
          <img src={logo} className="img-fluid" alt="Plastic Crocodile" />
        </Link>
        <ul className="list-unstyled mt-4">
          <li>
            <NavLink exact to="/">
              Debris Map
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics">Analytics</NavLink>
          </li>
          <li>
            <NavLink to="/collection">Debris collection</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
