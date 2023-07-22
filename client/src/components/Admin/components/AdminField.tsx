import React from "react";



// import { FieldRenderProps } from "react-final-form";
// interface AdminFieldProps {
//     input: FieldRenderProps<string, HTMLElement>["input"];
//     label: string;
//     meta: {
//         error: string;
//         touched: boolean;
//     };
// }
const AdminField:(props:any)=>JSX.Element = ({ input, label,value, meta: { error, touched } }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} className="form-input" {...value}/>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default AdminField;
