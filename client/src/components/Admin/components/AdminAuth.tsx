import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import toast from "react-hot-toast";

import AdminLogin from "./AdminLogin";
import { RootState } from "../../../reducers";
import { AdminState } from "../../../actions/types";
import { fetch_admin } from "../../../actions";
import { Admin } from "../../../actions/types";
import history from "../../../history";
import Loading from "../../../utilities/Loading";

interface AdminAuthState {
  fetch_admin: () => void;
  // admin:{
  //     admin:Admin|null,
  //     isLoading:boolean,
  //     error:string,
  //     message:string
  // },
  admin: any;
  children: Array<JSX.Element>|JSX.Element;
}
const AdminAuth: (props: AdminAuthState) => JSX.Element = (props) => {

  useEffect(() => {
    props.fetch_admin();
  }, []);
  console.log(props.children);

  const renderAdmin: () => JSX.Element|JSX.Element[] = () => {
    if (props.admin.isLoading) {
      return <Loading />;
    } else if (props.admin.error) {
      toast.error(props.admin.error,{
          
          id:"admin-error",
          });
      return <AdminLogin/>;
    } else if (props.admin.admin) {
      if(props.admin.admin.roles==="ADMIN"){
          return props.children;}
    else{
          toast.error("You are not authorized to view this page",{
              id:"admin-error",
          })
          return (
             <AdminLogin/>
          );
      }
    } else {
      toast.error("Please login to continue",{
          id:"login-error",
      });
      return  <AdminLogin/>;;
    }
  }
  return <div>{renderAdmin()}</div>;
    

};

const mapStateToProps = ({ admin }: RootState): { admin: AdminState } => {
  return {
    admin,
  };
};
export default connect(mapStateToProps, { fetch_admin })(AdminAuth);
