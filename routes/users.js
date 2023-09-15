const express = require("express");
const { userLogin, userSignup } = require("../controllers/users.Controller");

const clientRouter = express.Router();
// login

clientRouter.post("/usersLogin", userLogin);

clientRouter.post("/userSignup", userSignup);
module.exports = clientRouter;
