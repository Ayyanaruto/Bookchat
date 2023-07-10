import React from "react";
import "../styles/Header.css";

import { AlienIcon, CartIcon, Logo, ProfileIcon, RocketIcon } from "./icons/icons";

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <Logo />
            <span className="link-text">MemeChat</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <CartIcon />
            <span className="link-text">Your Cart</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <RocketIcon />
            <span className="link-text">RetroRevamp</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <AlienIcon />
            <span className="link-text">Categories</span>
          </a>
        </li>
        <li className="nav-item last-child">
          <a href="#" className="nav-link">
            <ProfileIcon />
            <span className="link-text">Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
