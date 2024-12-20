import productModel from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, price, stock, category } = req.body;

  const createNew = new productModel({
    name,
    price,
    stock,
    category,
  });

  await createNew.save();

  res.status(201).json({ success: true, message: "Created Successfully!" });
});

const getAllProduct = expressAsyncHandler(async (req, res) => {
  const getAll = await productModel.find({});

  if (!getAll) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found!" });
  }

  res.status(200).json(getAll);
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await productModel.findByIdAndDelete(id);

  if (!deleted) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found!" });
  }

  res.status(200).json({ success: true, message: "Deleted Successfully!" });
});

export { createProduct, getAllProduct,deleteProduct };
