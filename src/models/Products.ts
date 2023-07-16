import mongoose, { Schema } from "mongoose";
import {Product} from "../types";
const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true }
});
export default mongoose.model<Product>("Product", ProductSchema);