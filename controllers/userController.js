const asyncHandler = require("express-async-handler");
const CustomError = require("../error-handler/error-handler");
const User = require("../models/userModel");
const bcrypt=require("bcrypt")
const validator=require("validator")
const jwt=require("jsonwebtoken")

const createToken=(_id)=>{
  const
}

const createUser = asyncHandler(async (req, res) => {
  const { firsName, surname, email, password } = req.body;
  if (!firstName || !surname || !phone || !email || !password) {
    throw new CustomError("Please enter fields", 400);
  } else {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CustomError("");
    } else {
      await User.create({
        firsName,
        surname,
        email,
        password, //will be encrypted with bcrypt
      });
    }
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // decode the password first
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json("invalid email or password...")
    //throw error
   else {
    res.status(200).json({ data: user, success: true });
  }
});
const updateUser = asyncHandler(async (req, res) => {});
const getAllUsers = asyncHandler(async (req, res) => {});
module.exports = { createUser, getAllUsers, loginUser, updateUser };
