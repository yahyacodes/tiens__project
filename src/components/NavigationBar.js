import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationBar.module.css";

const Navigationbar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <Link to="/">
          {" "}
          <label htmlFor="logo-label" className={classes.logoLabel}>
            SAID
          </label>{" "}
        </Link>
        <ul className={classes.navbar}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigationbar;
