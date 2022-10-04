import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationBar.module.css";
import images from "../images/tiens-group-logo.png";

const Navigationbar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <Link to="/">
          <img src={images} alt="logo" className={classes.image} />
        </Link>
        <Link to="/">
          {" "}
          <label htmlFor="logo-label" className={classes.logoLabel}>
            TIENS
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
