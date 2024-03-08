const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter first name"],
  },
  surname: {
    type: String,
    required: [true, "Please enter surname"],
  },
  email: {
    type: String,
    required: [true, "Please enter first name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter enter password"],
  },
});
module.exports = mongoose.model("Users", UserSchema);
