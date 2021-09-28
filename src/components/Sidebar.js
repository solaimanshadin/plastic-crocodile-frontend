import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="p-3 ps-3 sidebar">
      <div>
        <div className="d-flex justify-content-between">
          <Link exact to="/">
            <img src={logo} className="img-fluid" alt="Plastic Crocodile" />
          </Link>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="btn text-secondary lead d-md-none"
          >
            <HiMenuAlt1 size={25} />
          </button>
        </div>
        {showMenu && (
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
        )}
      </div>
    </div>
  );
};

export default Sidebar;
