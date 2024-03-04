const User = require("../models/userModel");
const createUser = async (req, res) => {
  const { firsName, surname, email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    //error
  } else {
    await User.create({
      firsName,
      surname,
      email,
      password, //will be encrypted with bcrypt
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // decode the password first
  const user = await User.findOne({ email });
  if (!user) {
    //throw error
  } else {
    res.status(200).json({ data: user, success: true });
  }
};
const getAllUsers = async (req, res) => {};
module.exports = { createUser, getAllUsers };
