import React from "react";
import { useEffect,useRef} from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { fetch_order,update_order } from "../../../actions";
import { Order} from "../../../actions/types";
import Loading from "../../../utilities/Loading";
import { RootState } from "../../../reducers";
import "../../../styles/AdminCustOrderDetails.css"

interface AdminCustOrderDetailsProps {
  fetch_order: (id: string) => void;
  update_order: (id: string, status: string) => void;
  orders: {
    isLoading: boolean;
    error: boolean;
    orders: Order;
  };
}
const AdminCustOrderDetails: (
  props: AdminCustOrderDetailsProps
) => JSX.Element = (props) => {
  const { id } = useParams();
  const status = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    props.fetch_order(id as string);
  }, []);
  const renderOrder = () => {
    if (props.orders.isLoading) {
      return <Loading />;
    } else if (props.orders.error) {
      return <div>Error</div>;
    } else if (props.orders.orders.product) {
      return (
        <div className="order_grid" >
          <div className="order_grid_item">
            <div className="order_grid_item_title">Order ID</div>
            <div className="order_grid_item_value">
              {props.orders.orders.orderId}
            </div>
            <div className="order_grid_item_title">Order Date</div>
            <div className="order_grid_item_value">
              {new Date().toJSON().slice(0, 10).split("-").reverse().join("/")}
            </div>
            <div className="order_grid_item_title">Order Status</div>
            <div className="order_grid_item_value">
              {props.orders.orders.status}
            </div>
            <div className="order_grid_item_title">Order Total</div>
            <div className="order_grid_item_value">
              {props.orders.orders.amount}
            </div>
            <div className="order_grid_item_title">Payment Method</div>
            <div className="order_grid_item_value">
              {props.orders.orders.razorpayMethod}
            </div>
            <div className="order_grid_item_title">Payment Id</div>
            <div className="order_grid_item_value">
              {props.orders.orders.paymentId}
            </div>
            <div className="order_grid_image">
              <img
                src={props.orders.orders.product[0].image}
                alt={props.orders.orders.name}
              />
            </div>
            <div className="order_grid_item_title">Product Name</div>
            <div className="order_grid_item_value">
              {props.orders.orders.product[0].name}
              </div>
            <div className="order_grid_item_title">Product Price</div>
            <div className="order_grid_item_value">
              {props.orders.orders.product[0].price-props.orders.orders.product[0].discount}
              </div>

          </div>
          <div className="customer_data">
            <div className="customer_data_title">Customer Details</div>
            <div className="customer_data_name">
              {props.orders.orders.name}
              </div>
            <div className="customer_data_email">
              {props.orders.orders.email}
              </div>
            <div className="customer_data_phone">
              {props.orders.orders.phone}
              </div>
            <div className="customer_data_address">
              {props.orders.orders.address}
              </div>

          </div>
        <div className="order_status_grid">
          <div className="order_status_grid_title">Change Order Status</div>
          <div className="order_status_grid_item">
            <select ref={status} onChange={(event)=>{props.update_order(id as string,event.target.value)}}>
              <option value="Pending">Pending</option>
              <option value="Processing">Processed</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>

            </select>
            </div>
        </div>
        </div>
      );
    }
  };
  return <div>{renderOrder()}</div>;
};

const mapStateToProps = ({ order }: RootState): { orders: any } => {
  return {
    orders: order,
  };
};
export default connect(mapStateToProps, { fetch_order,update_order })(AdminCustOrderDetails);
