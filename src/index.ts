//Libraries
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "/home/Ayyan/Desktop/RetroRevamp/server/.env" });
import passport from "passport";
import cookieSession from "cookie-session";
import Razorpay from "razorpay";
import path from "path";

//Routes
import authRoutes from "./routes/authRoutes";
import userApi from "./routes/userApi";
import adminApi from "./routes/Admin/adminApi";
import checkoutRoutes from "./routes/checkoutRoutes";

//Data Models
import "./models/User";
import "./models/Products";
import "./models/Checkout";

//Services
import "./services/passport";

// App Config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
//Cookie Session Middleware
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET as string, "secret"],
  }),
);
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
//Payment
export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

//Routes Middleware
app.use("/auth/google", authRoutes);
app.use("/api", userApi);
app.use("/api/admin", adminApi);
app.use("/api/payment", checkoutRoutes);
if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  //like our main.js file or main.css file

  app.use(express.static(path.join(__dirname, "../client/build")));

  //Express will serve up the index.html file
  //if it doesn;t recognize the route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT||5000, () => {
  console.log("Server on port 5000");
});

