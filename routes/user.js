const express = require("express");

const userRouter = express.Router();

const { loginUser, userSignup } = require("../controllers/userControllers");

// login router

userRouter.post("/login", loginUser);

// signUp router
userRouter.post("/signup", userSignup);

module.exports = userRouter;
