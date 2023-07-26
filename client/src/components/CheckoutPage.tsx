import React from "react";
import ReactDOM from "react-dom";
import { Field } from "react-final-form";
import _ from "lodash";

import Loading from "../utilities/Loading";
import CheckoutForm from "./CheckoutForm";
import { fields } from "./checkoutformField";
import CheckoutFields from "./CheckoutFields";
import "../styles/CheckoutForm.css";
import { Product, Order_details } from "../actions/types";
import {connect} from "react-redux";
import { create_order } from "../actions";
import { validateEmail } from "../utilities/validateEmail";
import { RootState } from "../reducers";
interface Props {
  open: boolean;
  product: Product;
  quantity: number;
  create_order: (values: Order_details) => void;
}

const checkoutElement: HTMLElement = document.getElementById(
  "checkout-details"
) as HTMLElement;
const CheckoutPage: (props: Props) => JSX.Element = (props) => {
  const total=props.product.price - props.product.discount;

  const onSubmit = (values: Order_details) => {
    values.product = props.product._id;
    values.quantity = props.quantity;
    values.amount=total;
    props.create_order(values);
  };

  const renderFields = () => {
    if (!fields) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return fields.map((field, index) => {
      return (
        <Field
          type={field.type}
          name={field.name}
          label={field.label}
          component={CheckoutFields}
          key={index}
          className="checkout-field"
        />
      );
    });
  };
  if (props.open) {
    return ReactDOM.createPortal(
      <div className="container">
        <CheckoutForm
          onSubmit={onSubmit}
          validate={validate}
          header="Address Details"
        >
          {" "}
          {renderFields()}
        </CheckoutForm>
        <div className="checkout-details">
          <div className="checkout-header">
            <h2>Product Details</h2>
          </div>
          <div className="checkout-product">
            <div className="checkout-image">
              <img src={props.product.image} alt={props.product.name} />
            </div>
            <div className="checkout-details">
              <h2>{props.product.name}</h2>
              <div className="price">
                Rs. {props.product.price - props.product.discount}
              </div>
              <span
                className="quantity
          "
              >
                Quantity: {props.quantity}
              </span>
              <span className="total">
                Total: Rs.
                {(props.product.price - props.product.discount) *
                  props.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>,
      checkoutElement
    );
  } else {
    return <div></div>;
  }
};
const validate = (values: Order_details) => {
  let errors: any = {};
  errors.email = validateEmail(values.email || "");
  _.each(fields, ({ name }) => {
    if (!values[name as keyof Order_details]) {
      errors[name] = `You must provide a value for this field ${name}}`;
    }
  });
  return errors;
};
const mapStateToProps = (state: RootState) => {
  return {
    order: state.order,
  };
}


export default connect(mapStateToProps, { create_order })(CheckoutPage);