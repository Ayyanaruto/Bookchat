import e, { Router } from "express";
const router = Router();

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
    req.logout((err) => console.log(err));
    res.redirect("/");
    })

export default router; 