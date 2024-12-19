import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  isActive: { type: String },
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  age: { type: String },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
