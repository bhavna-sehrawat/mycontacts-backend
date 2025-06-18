const express = require("express");
const { 
  registerUser, 
  loginUser, 
  currentUser 
} = require("../controllers/userController"); // (auto imported from line A)
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);        // (auto imported from line A)

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;