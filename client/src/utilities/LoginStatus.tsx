import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetch_user } from "../actions";
import { AuthState } from "../actions/types";
import { RootState } from "../reducers";
import Loading from "./Loading";
import Modal from "./Modal";
import { toast } from "react-hot-toast";

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
   
    return (
      <div>
        <Modal />
      </div>
    );
  } else if (auth.user) {
    if(window.location.pathname==="/profile"){
    return React.cloneElement(children, { user: auth.user });
    }else{
      return children
    }
  } else {
toast.error("Please login to continue",{
  id:"login-toast"
  
})
    return (
      
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
