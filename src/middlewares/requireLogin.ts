import { RequestHandler} from "express";

export const requireLogin:RequestHandler = (req, res, next) =>{
  if (!req.user) {
    return res.status(401).send({ error: "You must be log in!" });
  } else {
    next();
  }
};
