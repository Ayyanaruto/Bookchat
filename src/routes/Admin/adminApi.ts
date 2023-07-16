import { Router } from "express";
import Products from "../../models/Products";
import { Product } from "../../types";

const router=Router()

router.get("/products", async (req, res,next)  => {
    const { name, price, description, image, countInStock } = req.body;
    const product:Product = new Products({
        name,
        price,
        description,
        image,
        countInStock,
    }) ;
    try {
        await product.save();
        res.send("Product added successfully");
    }catch(err){
        res.send(err)
    }

}
)

export default router;
