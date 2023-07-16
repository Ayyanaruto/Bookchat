import React from "react";
import { Link } from "react-router-dom";
import { Logo, CartIcon, ProfileIcon, AlienIcon, RocketIcon } from "../../../icons/icons";

function AdminHeader(){
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <Logo />
            <span className="link-text">Admin</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <CartIcon />
            <span className="link-text">Products</span>
          </Link>
        </li>
         <li className="nav-item">
          <Link to="#" className="nav-link">
            <RocketIcon />
            <span className="link-text">Orders</span>
          </Link>
        </li> 
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <AlienIcon />
            <span className="link-text">Users</span>
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
  );}

export default AdminHeader