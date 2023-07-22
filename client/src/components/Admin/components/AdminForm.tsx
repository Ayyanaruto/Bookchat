import React from "react";
import { Form } from "react-final-form";

const AdminForm:(props:any)=>JSX.Element = (props) => {
    return (
      <div>
        <h1 className="form-header">{props.header}</h1>
        <Form
          onSubmit={props.onSubmit}
          initialValues={props.initialValues}
          validate={props.validate}
          render={({ handleSubmit }) => <form onSubmit={handleSubmit}>
            {props.children}
            <button type="submit" className="form-button">Submit</button>
          </form>}
        />
      </div>
    );
    }

export default AdminForm;