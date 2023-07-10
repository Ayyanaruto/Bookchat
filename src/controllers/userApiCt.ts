import { RequestHandler } from "express";

export const currentUser: RequestHandler = (req, res) => {
  res.send(req.user);
};
export const logout: RequestHandler = (req, res) => {
  req.logout((err) => console.log(err));
  res.redirect("/");
};
