const express = require("express");
const {
  registerAccount,
  loginAccount,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controller/authController");

const router = express.Router();

router.post("/register", registerAccount);
router.post("/login", loginAccount);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

module.exports = router;
