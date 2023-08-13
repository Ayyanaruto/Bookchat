import React from "react";
import { useParams } from "react-router";
import { Logo } from "../icons/icons";

import "../styles/OrderSuccess.css";

const OrderSuccess = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div  className="success">
        <h1 className="success-header">Order Success</h1>
        <Logo />
        <h3 className="success-header-2">Thank you for shopping with us</h3>
        <h4 className="success-header-3">Order will be delivered in 3-5 business days with Reference Id {id}</h4>
        </div>
    );
    }

export default OrderSuccess;