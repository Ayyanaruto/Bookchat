import mongoose, {Schema, Types} from "mongoose";

const UserSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    email: { type: String, required: true },
    displayName: { type: String, required: true },
    orders:[{type:Schema.Types.ObjectId,ref:"Order"}]

})

export default mongoose.model("User", UserSchema); // User is the name of the collection in the database