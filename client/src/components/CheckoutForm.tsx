import React from "react";
import { Form } from "react-final-form";

const CheckoutForm: (props: any) => JSX.Element = (props) => {
  return (
    <div className="checkout-form">
      <h1 className="checkout-header">{props.header}</h1>
      <Form
        onSubmit={props.onSubmit}
        validate={props.validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {props.children}
            <button type="submit" className="checkout-button">
              Proceed to Payment
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default CheckoutForm;
