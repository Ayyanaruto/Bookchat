import { RequestHandler} from "express";

export const requireLogin:RequestHandler = (req, res, next) =>{
  if (!req.user) {
    return res.status(401).send({ error: "You must be log in!" });
  } else {
    next();
  }
};
export const requireAdmin:RequestHandler = (req, res, next) =>{
  if (!req.session?.admin) {
 return res.status(401).send({ error: "You must be log in!" });
  } else {
    if(req.session?.admin.roles==="ADMIN"){
      next();
    }
    else{
      return res.status(401).send({ error: "You must be admin!" });
    }
  }
}