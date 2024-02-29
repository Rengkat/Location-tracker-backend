const express = require("express");
const { getAllUsers, createUser } = require("../controllers/userController");
const router = express.Router();
router.route("/").post(createUser).get(getAllUsers);
module.exports = router;
