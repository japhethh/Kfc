import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number, required: true },
    stock: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
