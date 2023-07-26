import { Router,Request,Response } from "express";
import { requireLogin } from "../middlewares/requireLogin";
import { razorpayInstance } from "..";
const router = Router();

router.get("/orders", async(req:Request, res:Response) => {
    const {name,email,address,city,state,zip,phone,quantity,amount} = req.body;
    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt_order_74394",
        payment_capture: 0,
    };
    console.log(options);
    // try {
    //     const response = await razorpayInstance.orders.create(options);
    //     res.json({
    //         id: response.id,
    //         currency: response.currency,
    //         amount: response.amount,
    //     });
    // }
    // catch (e) {
    //     console.log(e);
    // }

  
});

export default router;