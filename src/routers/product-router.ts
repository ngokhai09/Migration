import { Router } from "express";
import { ProductController } from "../controllers/product-controler";
import { Product } from "../models/products-model";
let producrRouter = Router();
let productController = new ProductController();

producrRouter.get("/", productController.index);
producrRouter.get("/create", productController.showCreate);
producrRouter.post("/create", productController.create);

export { producrRouter };
