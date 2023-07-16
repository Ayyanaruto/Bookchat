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
    description:string,
    image:string,
    countInStock:number
}