import { NextFunction, Request, Response, Router } from "express";
import Products from "../../models/Products";
import Checkout from "../../models/Checkout";
import Admins from "../../models/Admin";
import { Product, Order, Admin } from "../../types";
import cloudinary from "../../services/cloudinary";
import bcrypt from "bcrypt";

const router = Router();
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, roles } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    Admins.findOne({ email: email }).then(async (admin) => {
      if (admin) {
        res.send("Admin already exists");
      } else {
        const admin: Admin = new Admins({
          email,
          password: hashedPassword,
          roles,
        });
        try {
          await admin.save();
          res.send("Admin added successfully");
        } catch (err) {
          res.send(err);
        }
      }
    });
  }
);
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
      const admin = await Admins.findOne({ email: email });
      if (admin) {
        const isMatch = await admin.isValidPassword(password);
        if (isMatch) {
          req.session!.admin = {
            email: admin.email,
            roles: admin.roles,
          };

          res.send("Logged in successfully");
        } else {
          res.send("Invalid credentials");
        }
      } else {
        res.send("Admin doesn't exist");
      }
    } catch (err) {
      res.send("Something went wrong" + err);
    }
  }
);
router.get("/current_admin", (req: Request, res: Response) => {
if(req.session!.admin){
res.send(req.session!.admin);}
  else{
    res.send(null);
  }
})
router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.send("Logged out successfully");
});

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
      if (product.imageId && product.imageId !== imageId) {
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
      } else {
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
      if (req.body.imageId) {
        await cloudinary.uploader.destroy(
          req.body.imageId,
          (err: Error, result: Object) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        );
      }
      await Products.findByIdAndDelete<Product>(req.params.id);

      res.send("Product removed successfully");
    }
  } catch (err) {
    res.send("Succesfully Deleted");
  }
});
export default router;

router.get("/orders", async (req, res, next) => {
  try {
    const orders = await Checkout.find<Order>({});
    res.send(orders);
  } catch (err) {
    res.send(err);
  }
});
router.get("/orders/:id", async (req, res, next) => {
  try {
    const order = await Checkout.findById<Order>(req.params.id).populate(
      "product"
    );
    res.send(order);
  } catch (err) {
    res.send(err);
  }
});
router.patch("/orders/:id", async (req, res, next) => {
  const { status } = req.body;
  console.log(req.body);
  try {
    const order: Order | null = await Checkout.findById(req.params.id);
    if (order) {
      order.status = status;
      const updatedOrder = await order.save();
      res.send(updatedOrder);
    }
  } catch (err) {
    res.send(err);
  }
});
router.delete("/orders/:id", async (req, res, next) => {
  try {
    if (req.params.id) {
      await Checkout.findByIdAndDelete<Order>(req.params.id);
      res.send("Order removed successfully");
    }
  } catch (err) {
    res.send("Succesfully Deleted");
  }
});
