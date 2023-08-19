import mongoose,{Types} from "mongoose";

export interface User{
  _id:string,
  googleId:string,
  email:string,
  displayName:string}

//Products
export interface Product extends mongoose.Document{
    name:string,
    price:number,
    discount:number,
    description:string,
    image:string,
    imageId:string,
    countInStock:number
}
//Orders
export interface Order extends mongoose.Document{
  orderId:string,
  paymentId:string,
  razorpayMethod:string,
  razorpaysignature:string,
  name:string,
  email:string,
  address:string,
  phone:string,
  quantity:number,
  amount:number,
  user:Types.ObjectId,
  product:Types.ObjectId[],
  status:string,
  date:Date
}

export interface Admin extends mongoose.Document {
  email: string,
  password: string,
  roles: string,
  isValidPassword(password: string): Promise<boolean>;
}