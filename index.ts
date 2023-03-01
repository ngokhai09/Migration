import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
import { router } from "./src/routers/router";
import passport from "./src/middlewares/passport";
import fileUpload from "express-fileupload";
const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(fileUpload({ createParentPath: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb+srv://root:Blog%40123456@cluster0.f2ybqzw.mongodb.net/DemoC10?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect Success");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("", router);
app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.listen(PORT, () => {
  console.log("App running on: http://localhost:" + PORT);
});
