import React from "react";

 const CheckoutFields: (props: any) => JSX.Element = ({
   input,
   label,
   value,
   meta: { error, touched },
 }) => {

   return (
     <div>
       <label className="checkout-label">{label}</label>
       <input
         {...input}
         style={{ marginBottom: "5px" }}
         className="checkout-input"
         {...value}
       />
       <div className="red-text" style={{ marginBottom: "20px" }}>
         {touched && error} 
       </div>
      </div>
   );
 };


    
    export default CheckoutFields;