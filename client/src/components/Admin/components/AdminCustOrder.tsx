import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetch_orders } from "../../../actions";
import { Order } from "../../../actions/types";
import Loading from "../../../utilities/Loading";
import "../../../styles/AdminCustOrder.css"
import { Link } from "react-router-dom";
interface AdminCustOrderProps {
  fetch_orders: () => void;
  orders: {
    isLoading: boolean;
    error: boolean;
    orders: Order[];
  };
}

const AdminCustOrder: (
  props: AdminCustOrderProps
) => JSX.Element = (props) => {
  const ref = useRef<HTMLSelectElement>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    props.fetch_orders();
  }, []);

  const renderOrders = () => {
    if (props.orders.isLoading) {
      return <Loading />;
    } else if (props.orders.error) {
      return <div>Error</div>;
    }else if (props.orders.orders.length === 0) {
      return <div>No Orders</div>;
    }
     else if(props.orders.orders.length > 0){
      if (filter === "all") {
        return props.orders.orders.map((order) => {
          return (
            <div key={order._id}>
              <div className="order">
                <div className="order_body">
                  <div className="order_body_header">
                    <div className="order_body_header_title">
                      <h2>Order ID: {order.orderId}</h2>
                    </div>
                    <div className="order_body_header_date">
                      <h2>
                        Created at:
                        {new Date()
                          .toJSON()
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      </h2>
                    </div>
                  </div>
                  <div className="customer_email">
                    <h2>Quantity : {order.quantity}</h2>
                  </div>
                  <div className="order_body_items">
                    <img src={order.product[0].image} alt={order.name} />
                  </div>
                  <div className="order_status">
                    <h2>Order Status: {order.status}</h2>
                  </div>
                  <div className="order_button">
                    <Link to={`/admin/customer/orders/${order._id}`}>
                      <button>View Order</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return _.chain(props.orders.orders)
          .filter((order) => order.status === filter)
          .map((order) => {
            return (
              <div key={order._id}>
                <div className="order">
                  <div className="order_body">
                    <div className="order_body_header">
                      <div className="order__body_header_title">
                        <h2>Order ID: {order.orderId}</h2>
                      </div>
                      <div className="order_body_header_date">
                        <h2>
                          Created at:
                          {new Date()
                            .toJSON()
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("/")}
                        </h2>
                      </div>
                    </div>
                    <div className="customer_email">
                      <h2>Customer Email: {order.email}</h2>
                    </div>
                    <div className="order_body_items">
                      <img src={order.product[0].image} alt={order.name} />
                    </div>
                    <div className="order_status">
                      <h2>Order Status: {order.status}</h2>
                    </div>
                    <div className="order_button">
                      <Link to={`/admin/orders/${order._id}`}>
                        <button>View Order</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
          .value();
      }
    }
  };
  return (
    <div className="order-wrapper">
      <div className="filter_orders">
        <div className="filter_orders_header">
          <h2>Filter Orders</h2>
        </div>
        <div className="filter_orders_body">
          <select
            ref={ref}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Deleivered">Completed</option>
          </select>
        </div>
      </div>
      {renderOrders()}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    orders: state.order,
  };
};

export default connect(mapStateToProps, { fetch_orders })(AdminCustOrder);
