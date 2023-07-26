import { NextFunction, Request, Response, Router } from "express";
import Products from "../../models/Products";
import { Product } from "../../types";
import cloudinary from "../../services/cloudinary";

const router = Router();

router.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, price, description, image, imageId, countInStock, discount } =
      req.body;
    const product: Product = new Products({
      name,
      price,
      description,
      image,
      imageId,
      countInStock,
      discount,
    });
    try {
      await product.save();
      res.send("Product added successfully");
    } catch (err) {
      res.send(err);
    }
  }
);
router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products: Product[] = await Products.find({});
      res.send(products);
    } catch (err) {
      res.send(err);
    }
  }
);
router.get(
  "/products/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await Products.findById(req.params.id);
      if (product) {
        res.send(product);
      }
    } catch (err) {
      res.send(err);
    }
  }
);
router.patch("/products/:id", async (req, res, next) => {
  const { name, price, description, image, imageId, countInStock } = req.body;
  console.log(req.body.image);
  try {
    const product: Product | null = await Products.findById(req.params.id);
    if (product) {
      if (product.imageId && product.imageId!==imageId) {
        console.log("In");
        const res = await cloudinary.uploader.destroy(
          product.imageId,
          (err: Error, result: any) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        );
      }else{
        console.log("Out");
      }
       product.image = image;
       product.imageId = imageId;
      product.name = name;
      product.price = price;
      product.description = description;
      product.countInStock = countInStock;
      const updatedProduct = await product.save();
      res.send(updatedProduct);
    }
  } catch (err) {
    res.send(err);
  }
});
router.delete("/products/:id", async (req, res, next) => {
  try {
    if (req.params.id) {
     if(req.body.imageId){
      await cloudinary.uploader.destroy(
        req.body.imageId,
        (err: Error, result: Object) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        }
      );}
      await Products.findByIdAndDelete<Product>(req.params.id);

      res.send("Product removed successfully");
    }
  } catch (err) {
    res.send("Succesfully Deleted");
  }
});
export default router;
