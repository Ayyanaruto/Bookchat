import mongoose, { Schema } from "mongoose";
import {Product} from "../types";
const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    description: { type: String ,required: true},
    image: { type: String },
    imageId: { type: String},
    countInStock: { type: Number, required: true }
});
export default mongoose.model<Product>("Product", ProductSchema);