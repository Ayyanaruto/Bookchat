import React from "react";
import "../styles/PaymentButton.css";
import { useNavigate } from "react-router";
import history from "../history";

declare global {
  interface Window {
    Razorpay: any;
  }
}
interface Props {
  orders: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    quantity: number;
    amount: number;
  };
  paymenID: string;
  productID: string;
  userId:string
}

const payment = async (
  orders: Props["orders"],
  paymenID: Props["paymenID"],
  productID: Props["productID"],
  userId:Props["userId"]
) => {
  if (!process.env.REACT_APP_RAZORPAY_ID) {
    throw new Error("Razorpay key not found");
  } else if (!orders) {
    throw new Error("Order not found");
  } else if (paymenID.length > 0) {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
      amount: orders.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Mmemesterz", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: paymenID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: orders.name, //your customer's name
        email: orders.email,
        contact: orders.phone, //Provide the customer's phone number for better conversion rates
      },
      notes: {
        Name: orders.name,
        address: `${orders.address} ${orders.city} ${orders.state} ${orders.zip}`,
        phone: orders.phone, //Your customer's address
        email: orders.email, //Your customer's email address
        quantity: orders.quantity,
        product: productID,
        user:userId
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = await new window.Razorpay(options);
    console.log(options);
    razor.open();
  }
};
const PaymentButton: (props: Props) => any = (props) => {
  return (
    <div className="razorpay">
      <h1 className="header">Pay Now </h1>
      <div
        className="payment-button"
        onClick={() => payment(props.orders, props.paymenID, props.productID,props.userId)}
      >
        <div className="payment-button-content">
          <span className="payment-button-text">Pay Now</span>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
              fill="#fff"
            ></path>
            <path
              d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"
              fill="#fff"
            ></path>
          </svg>
          <div className="PaymentButton-Button-rzpBranding">
            Secured by Razorpay
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentButton;
