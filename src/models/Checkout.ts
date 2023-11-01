import mongoose,{Schema, Types} from "mongoose";
import {Order,} from "../types";

const OrderDetailsSchema = new Schema({
  orderId: String,
  paymentId: String,
  razorpayMethod: String,
  razorpaysignature: String,
  name: String,
  email: String,
  address: String,
  phone: String,
  quantity: Number,
  amount: Number,
  user: { type: Types.ObjectId, ref: "User" },
  product: [{ type: Types.ObjectId, ref: "Product" }],
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
  },
  date: {
    type:String,
    default: new Date().toJSON().slice(0, 10).split("-").reverse().join("/"),
  },

});

const Order = mongoose.model<Order>("Order", OrderDetailsSchema);

export default Order;