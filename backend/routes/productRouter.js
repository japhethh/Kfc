import express from "express";
import {
  createProduct,
  getAllProduct,
  deleteProduct
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProduct);
productRouter.get("/:id", deleteProduct);

export default productRouter;
