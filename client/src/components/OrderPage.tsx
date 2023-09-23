import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetch_orders } from "../actions";
import LoginStatus from "../utilities/LoginStatus";
import { Logo } from "../icons/icons";
import { RootState } from "../reducers";
import Loading from "../utilities/Loading";
import "../styles/OrderPage.css";
import {Chrono} from "react-chrono"

interface OrderPageProps {
  fetch_orders: () => void;
  orders: any;
}
const OrderPage: (props: OrderPageProps) => JSX.Element = (props) => {
  useEffect(() => {
    const fetchOrders: () => void = async () => {
      await props.fetch_orders();
    };
    fetchOrders();
  }, []);
 
  const activeIndex=(order:any)=>{
    if(order.status==="Pending"){
      return 0
    }else if (order.status === "Processing") {
      return 1;
    } else if (order.status === "Shipped") {
      return 2;
    } else if (order.status === "Delivered") {
      return 3;
    }
  }
  

 
  const reenderOrders: () => JSX.Element[] | JSX.Element = () => {
  
    if (props.orders.length === 0) {
      return (
        <div className="no-orders">
          <h2>No orders yet</h2>
        </div>
      );
    } else if (props.orders.isLoading) {
      return <Loading />;
    } else if (props.orders.error) {
     
    } else if (props.orders.orders.length > 0) {
      return props.orders.orders.map((order: any,i:any) => {
        const active=activeIndex(order)
        console.log(active)
        return (
          <div className="order-card" key={order._id}>
            <div className="order-card-header">
              Thanks for your order {order.name}!
              <div className="order-card-header-logo">
                <Logo />
              </div>
            </div>
            <div className="order-card-body">
              <h6>Receipt</h6>
              <div className="order-card-body-items">
                <div className="order-details">
                  <div className="order-image">
                    <img
                      src={order.product[0].image}
                      alt={order.product[0].name}
                    />
                  </div>
                  <div className="order-details-name">
                    {order.product[0].name}
                  </div>
                  <div className="order-details-price">
                    Price: ${order.product[0].price}
                  </div>
                  <div className="order-details-quantity">
                    Quantity: {order.quantity}
                  </div>
                  <div className="track-order"></div>
                </div>
                <div className="order-receipt">
                  <div className="order-receipt-header">Order Summary</div>
                  <div className="order-receipt-body">
                    <div className="order-receipt-body-items">
                      <div className="order-receipt-body-items-name">Price</div>
                      <div className="order-receipt-body-items-value">
                        ${order.product[0].price * order.quantity}
                      </div>
                    </div>
                    <div className="order-receipt-body-items">
                      <div className="order-receipt-body-items-name">
                        Shipping
                      </div>
                      <div className="order-receipt-body-items-value">$0</div>
                    </div>
                    <div className="order-receipt-body-items">
                      <div className="order-receipt-body-items-name">
                        Discount
                      </div>
                      <div className="order-receipt-body-items-value">
                        {order.product[0].discount * order.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="order-receipt-body-items total">
                    <div className="order-receipt-body-items-name">Total</div>
                    <div className="order-receipt-body-items-value">
                      ${order.amount}
                    </div>
                  </div>
                </div>

                <div className="timeline">
                  <Chrono
                    cardLess
                    items={[
                      { title: "Pending" },
                      {
                        title: "Processing",
                      },
                      {
                        title: "Shipped",
                      },
                      {
                        title: "Delivered",
                      },
                    ]}
                    itemWidth={80}
                    hideControls
                    mode="HORIZONTAL"
                    activeItemIndex={active}
                    disableClickOnCircle
                    fontSizes={{
                      title: "0.8rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="order-page">
      <LoginStatus>{reenderOrders()}</LoginStatus>
    </div>
  );
};


const mapStateToProps = (state: RootState) => {
  return {
    orders: state.order,
  };
};


export default connect(mapStateToProps, { fetch_orders })(OrderPage);
