import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import {CartIcon, Logo, ProfileIcon} from "../icons/icons";

const Header:()=>JSX.Element=() => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <Logo />
            <span className="link-text">MemeChat</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            <CartIcon />
            <span className="link-text">Your Orders</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="#" className="nav-link">
            <RocketIcon />
            <span className="link-text">RetroRevamp</span>
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to="#" className="nav-link">
            <AlienIcon />
            <span className="link-text">Categories</span>
          </Link>
        </li> */}
        <li className="nav-item last-child">
          <Link to="/profile" className="nav-link">
            <ProfileIcon />
            <span className="link-text">Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
