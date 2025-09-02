const express = require('express');
const passport = require("passport")
const { registerUser, verifyEmail, loginUser , forgotPassword , resetPassword , userData } = require("../controllers/authController.js")
const  authMiddleware  = require("../middlewares/authMiddleware");

const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/register", registerUser);
router.get("/userData",authMiddleware, userData);

router.post("/login", loginUser);

// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
      res.redirect("http://localhost:5173/");
    });
  });  

module.exports = router