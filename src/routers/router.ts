import { Router } from "express";
import { producrRouter } from "./product-router";
import passport from "../middlewares/passport";
const router = Router();

router.use("/", producrRouter);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  console.log(req.body);

  passport.authenticate("local", (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send("Wrong email or password");
    }

    req.login(user, () => {
      res.send("You are authenticated");
    });
  })(req, res, next);
});
export { router };
