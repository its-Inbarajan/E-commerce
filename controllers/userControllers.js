const User = require("../models/userModels");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

// user Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    res.c;

    const token = createToken(user._id);

    res.status(200).json({ email, token, username });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// user Signup

const userSignup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(email, password, username);

    const token = createToken(user._id);

    res.status(200).json({ email, token, username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  userSignup,
};
