const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

// Define the POST route for user registration
router.post("/register", registerUser);

module.exports = router;
