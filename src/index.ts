//Libraries
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({ path: "/home/Ayyan/Desktop/RetroRevamp/server/.env" });
import passport from "passport";
import cookieSession from "cookie-session";

//Routes
import authRoutes from "./routes/authRoutes";
import userApi from "./routes/userApi";
import adminApi from "./routes/Admin/adminApi";

//Data Models
import "./models/User";
import "./models/Products";

//Services
import "./services/passport";

//App Config
const app = express();
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/RetroRevamp")
.then(() => console.log("DB is connected"))
.catch((err) => console.log(err));
//Cookie Session Middleware
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET as string, "secret"],
  })
);
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


//Routes Middleware
app.use("/auth/google", authRoutes);
app.use("/api", userApi);
app.use("/api/admin", adminApi);



app.listen(5000, () => {
  console.log("Server on port 5000");
});
