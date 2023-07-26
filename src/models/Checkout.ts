import mongoose,{Schema, Types} from "mongoose";

const OrderDetailsSchema = new Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    phone: String,
    quantity: Number,
    amount: Number,
    User: {type: Types.ObjectId, ref: "User"},
    product: [{type: Types.ObjectId, ref: "Product"}],

})

const OrderDetails = mongoose.model("OrderDetails", OrderDetailsSchema);

export default OrderDetails;