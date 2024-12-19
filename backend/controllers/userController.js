import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, age } = req.body;

  if ((!name || !email, !password || !age)) {
    return res
      .status(400)
      .json({ success: false, message: "Required to put all!" });
  }

  const created = new userModel({
    name,
    email,
    password,
    age,
  });

  created.save();

  res
    .status(201)
    .json({ success: true, message: "Created Successfully!", created });
});

const getAllUser = asyncHandler(async (req, res) => {
  const getAll = await userModel.find();

  if (!getAll) {
    return res
      .status(404)
      .json({ success: false, message: "User id not found!" });
  }

  res.status(200).json(getAll);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedUser) {
    return req
      .status(404)
      .json({ success: false, message: "User id not found!" });
  }

  res
    .status(200)
    .json({ success: true, message: "Updated Successfully!", updatedUser });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const exists = await userModel.findByIdAndDelete(id);

  if (!exists) {
    return res
      .status(404)
      .json({ success: false, message: "User id not found!" });
  }

  res
    .status(200)
    .json({ success: true, message: "Deleted Successfully!", exists });
});

const getSpecificId = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const exists = await userModel.findById(id);

  if (!exists) {
    return res
      .status(404)
      .json({ success: false, message: "User id not found!" });
  }

  res.status(200).json(exists);
});

export { createUser, getAllUser, updateUser, deleteUser, getSpecificId };
