import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import {Admin} from '../types';

const AdminSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        enum:[
            "CUSTOMER",
            "ADMIN"
        ]
    }
})

AdminSchema.methods.isValidPassword = async function (password: string):Promise<boolean> {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    return false;
  }
};
export default mongoose.model<Admin>('Admin',AdminSchema);