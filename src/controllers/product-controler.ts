import mongoose from "mongoose";
import { Product } from "../models/products-model";

export class ProductController {
  async index(req, res) {
    let products = await Product.find();
    res.render("products/list", { data: products, title: "Demo MongoDB" });
  }
  showCreate = (req, res) => {
    res.render("products/create");
  };
  create = (req, res) => {
    let product = {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    };
    Product.insertMany(product);
    res.redirect("/");
  };
}
