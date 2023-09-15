const Users = require("../models/users.models");
const jwt = require("jsonwebtoken");

// login
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};
const userLogin = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const users = await Users.userLogin(email, password, username);
    const token = createToken(users._id);

    res.status(200).json({ email, token, username });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// signup
const userSignup = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const users = await Users.userSignup(email, password, username);

    const token = createToken(users._id);

    res.status(200).json({ email, token, username });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  userLogin,
  userSignup,
};
