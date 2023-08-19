import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-hot-toast";

import { fetch_user } from "../actions";
import { AuthState } from "../actions/types";
import { RootState } from "../reducers";
import Loading from "./Loading";
import Modal from "./Modal";

interface Props {
  fetch_user(): any;
  auth: AuthState;
  children: any
}

const renderLogin: (
  auth: AuthState,
  children: React.ReactElement
) => JSX.Element = (auth, children) => {
  if (auth.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else if (auth.error) {
    toast.error(auth.error);
    return (
      <div>
        <Modal />
      </div>
    );
  } else if (auth.user) {
    return React.cloneElement(children, { user: auth.user });
  } else {
toast.error(auth.error, {
  id: "login-error",
  duration: 4000,
      });
    return (
      toast.error("Please login to continue", {
        id: "login-error",
        duration: 4000,
      }),
      <div>
        <Modal />
      </div>
    );
  }
};

const LoginStatus = ({ auth, fetch_user, children }: Props): JSX.Element => {
  useEffect(() => {
    fetch_user();
  }, []);
  return <div>{renderLogin(auth, children)}</div>;
};
const mapStateToProps = ({ auth }: RootState): { auth: AuthState } => {
  return { auth };
};

export default connect(mapStateToProps, { fetch_user })(LoginStatus);
