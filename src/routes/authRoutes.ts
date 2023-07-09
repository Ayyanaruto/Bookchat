import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/api/current_user");
    }
);

export default router;