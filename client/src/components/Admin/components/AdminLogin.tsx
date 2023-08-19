import React from "react";
import { connect } from "react-redux";
import { Field } from "react-final-form";

import { login_admin } from "../../../actions";
import "../../../styles/AdminLogin.css"
import { RootState } from "../../../reducers";
import AdminForm from "./AdminForm"
import AdminField from "./AdminField";
import {AdminState } from "../../../actions/types";
interface AdminLoginProps{
  login_admin:(values:{email:string,password:string})=>void,
  admin:AdminState
}
const AdminLogin:(props:AdminLoginProps)=>JSX.Element = (props) => {
const onSubmit=(values:{
  email:string,
  password:string
})=>{
props.login_admin(values)
}
  return (
    <div>
      <div className="admin-login-form">
        <h1>Admin Login</h1>
      <AdminForm onSubmit={onSubmit}>
        <Field type="text" name="email" label="Email" component={AdminField} />
        <Field
          type="text"
          name="password"
          label="Password"
          component={AdminField}
        />
      </AdminForm>
      </div>
    </div>
  );
};
const mapStateToProps=({admin}:RootState):{admin:AdminState}=>{
  return{
    admin:admin
  }
}
export default connect(mapStateToProps,{login_admin})(AdminLogin)