const userModal = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
// const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");

require("dotenv").config();

// const createToken = (_id) => {
//   const jwtkey = process.env.key_jwt;
//   return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
// };

const registerUser = async (req, res) => {
  try {
    // to destructure name email password from body
    const { name, email, password } = req.body;

    // to check if email is already registered
    let user = await userModel.findOne({ email });
    if (user)
      return res
        .status(400)
        .json("User with the given email already exist....");

    // to check that user inputs name email password
    if (!name || !email || !password)
      return res.status(400).json("All fields are required...");

    // to validate email
    if (!validator.isEmail(email))
      return res.status(400).json("email must be a valid email...");
    console.log("check 1");
    // to validate password
    if (!validator.isStrongPassword(password))
      return res.status(400).json("password must be a strong email...");
    console.log("check 2");
    user = new userModel({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    console.log("check 3 tagain");

    await user.save();
    const token = createToken(user._id);
    res.status(200).json({ _id: user._id, name, email, token });
    console.log("check 4");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) return res.status(400).json("invalid email or password...");
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(400).json("Invalid email or password...");
    const token = createToken(user._id);
    res.status(200).json({ _id: user.id, name: user.name, email, token });

    console.log("user:", email, token);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser, findUser, getUsers };
