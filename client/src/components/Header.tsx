import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import {CartIcon, Logo, ProfileIcon,RocketIcon,AlienIcon} from "../icons/icons";

const Header:()=>JSX.Element=() => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <Logo />
            <span className="link-text">BookChat</span>
          </Link>
        </li>
         <li className="nav-item">
          <Link to="/" className="nav-link">
            <RocketIcon />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            <CartIcon />
            <span className="link-text">Your Orders</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            <AlienIcon />
            <span className="link-text">Sell books</span>
          </Link>
        </li>
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
