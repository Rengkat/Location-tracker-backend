const express = require("express");
const { getAllUsers, createUser, loginUser, updateUser } = require("../controllers/userController");
const router = express.Router();
router.route("/").post(createUser).get(getAllUsers);
router.route("/login").post(loginUser);
router.route("/:userId").patch(updateUser);
module.exports = router;
