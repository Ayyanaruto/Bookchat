import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import { AlienIcon, CartIcon, Logo, ProfileIcon, RocketIcon } from "./icons/icons";

const Header:()=>JSX.Element=() => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="#" className="nav-link">
            <Logo />
            <span className="link-text">MemeChat</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <CartIcon />
            <span className="link-text">Your Cart</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <RocketIcon />
            <span className="link-text">RetroRevamp</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <AlienIcon />
            <span className="link-text">Categories</span>
          </Link>
        </li>
        <li className="nav-item last-child">
          <Link to="#" className="nav-link">
            <ProfileIcon />
            <span className="link-text">Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
