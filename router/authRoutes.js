const express = require("express");
const {
  registerAccount,
  loginAccount,
  getAllUsers,
  getUserById,
  deleteUser,
} = require("../controller/authController");

const router = express.Router();

router.post("/register", registerAccount);
router.post("/login", loginAccount);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);

module.exports = router;
