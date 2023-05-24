import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../assets/styles/NavMain.module.css";

export const NavMain = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className={`${classes.NavMain} ${showNav ? classes.NavMainExpanded : ""}`}
    >
      <button
        type="button"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        Menü
      </button>
      <ul>
        <li>
          <NavLink to="/">Ana Sayfa</NavLink>
        </li>
        <li>
          <NavLink to="/hakkımda">Hakkımda</NavLink>
        </li>
        <li>
          <NavLink to="/lab">Lab</NavLink>
        </li>
      </ul>
    </nav>
  );
};
