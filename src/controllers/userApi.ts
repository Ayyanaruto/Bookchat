import { RequestHandler } from "express";
import { User } from "../types";

export const currentUser: RequestHandler = (req, res) => {
  const user:User|null=req.user as User
  res.send(req.user);
};
export const logout: RequestHandler = (req, res) => {
  req.logout((err) => res.send(err));
  res.redirect("/");
};
