import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/ProfilePage.css";
import LoginStatus from "../utilities/LoginStatus";
import { ProfilePageIcon } from "../icons/icons";
import { User } from "../actions/types";
interface Props {
  user: User;
}

const Profile: (props: Props) => JSX.Element = ({ user }) => {
  return (
    <div>
      <div className="profile">
        <h1 className="profile-header">Profile Page</h1>
        <div className="profile-icon">
        <ProfilePageIcon/>
        </div>

        <div className="profile-data">
          <h2>
            Username: <span>{user.displayName}</span>
          </h2>

          <h2>
            Email:
            <span>
              {" "}
              {user.email}
              <Link to="/profile/edit">change email</Link>
            </span>
          </h2>
          <div className="sign-out">
            <a href="/api/logout">SIGNOUT</a>
          </div>
        </div>
        <h1 className="profile-header">Manage Accounts</h1>
        <div className="manage-items">
          <div className="manage-item">
            <button>Orders</button>
          </div>
          <div className="manage-item">
            <button>Address</button>
          </div>
          <div className="manage-item">
            <button>Your invoices</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProfilePage: (props: any) => JSX.Element = (props) => {
  return (
    <LoginStatus>
      <Profile user={props.user} />
    </LoginStatus>
  );
};

export default ProfilePage;
