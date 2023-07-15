import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/ProfilePage.css";
import LoginStatus from "../utilities/LoginStatus";
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
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.43 45.35a17.57 1.65 0 1 0 35.14 0 17.57 1.65 0 1 0-35.14 0Z"
              fill="#45413c"
              opacity={0.15}
            />
            <path
              d="m31.56 32.35-4.8-1.57V29a10 10 0 0 0 7-8.07h.12a2 2 0 0 0 2-2.16 1.92 1.92 0 0 0-1.16-1.53V14a10.79 10.79 0 1 0-21.57 0v3.22a1.92 1.92 0 0 0-1.13 1.44 2 2 0 0 0 2 2.32h.13a9.94 9.94 0 0 0 7 8.07v1.78l-4.79 1.57a7.93 7.93 0 0 0-5.46 7.53V45H37v-5.12a7.93 7.93 0 0 0-5.44-7.53Z"
              fill="#8ca4b8"
            />
            <path
              d="m16.38 36.13 1.21-.4a5.2 5.2 0 0 0 3.58-4.95l-4.79 1.57a7.93 7.93 0 0 0-5.46 7.53v3.77a7.91 7.91 0 0 1 5.46-7.52Z"
              fill="#adc4d9"
            />
            <path
              d="M13.18 17.73a10.79 10.79 0 0 1 21.57 0V14a10.79 10.79 0 1 0-21.57 0v3.77Z"
              fill="#adc4d9"
            />
            <path
              d="m31.56 32.35-4.8-1.57a5.21 5.21 0 0 0 3.59 4.95l1.21.4A7.91 7.91 0 0 1 37 43.65v-3.77a7.93 7.93 0 0 0-5.44-7.53Z"
              fill="#adc4d9"
            />
            <path
              d="m31.56 32.35-4.8-1.57V29a10 10 0 0 0 7-8.07h.12a2 2 0 0 0 2-2.16 1.92 1.92 0 0 0-1.16-1.53V14a10.79 10.79 0 1 0-21.57 0v3.22a1.92 1.92 0 0 0-1.13 1.44 2 2 0 0 0 2 2.32h.13a9.94 9.94 0 0 0 7 8.07v1.78l-4.79 1.57a7.93 7.93 0 0 0-5.46 7.53V45H37v-5.12a7.93 7.93 0 0 0-5.44-7.53Z"
              fill="none"
              stroke="#45413c"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
            <button>SIGNOUT</button>
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
