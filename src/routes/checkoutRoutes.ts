import { Router, Request, Response, response } from "express";
import { requireAdmin, requireLogin } from "../middlewares/requireLogin";
import { razorpayInstance } from "..";
import OrderDetails from "../models/Checkout";
import crypto from "crypto";
import { User } from "../types";
const router = Router();

router.post("/orders", requireLogin,async (req: Request, res: Response) => {
  const User: User = req.user as User;

  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "receipt_order_74394",
    payment_capture: 1,
  };
  try {
    const response = await razorpayInstance.orders.create(options);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      user: User._id,
    });
  } catch (e) {
    console.log(e);
  }
});
router.post("/verification",async (req: Request, res: Response) => {
  //do a validation
  const{order_id,id,method}=req.body.payload.payment.entity;
  const{name,email,address,phone,quantity,product,user}=req.body.payload.payment.entity.notes;
   const shasum=crypto.createHmac('sha256',process.env.RAZORPAY_WEBHOOK_SECRET as string);
    shasum.update(JSON.stringify(req.body));
    const digest=shasum.digest('hex');
    console.log(digest,req.headers['x-razorpay-signature']);
    if(digest===req.headers['x-razorpay-signature']){
   const orders=new OrderDetails({
      orderId:order_id,
      paymentId:id,
      razorpayMethod:method,
      razorpaysignature:req.headers['x-razorpay-signature'],
      name,
      email,
      address,
      phone,
      quantity,
      product,
      user,
      amount:req.body.payload.payment.entity.amount/100

    })
    try{
      const response=await orders.save();
     console.log(response);
     res.status(200).json({status:"ok"});
     
    } 
    catch(e){
      console.log(e);
    }
    }

    else{
      console.log("request is not legit");
    }
});

router.get("/orders",async (req: Request, res: Response) => {
  
  try {
    const orders = await OrderDetails.find({ }).populate("product");
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
});

export default router;
