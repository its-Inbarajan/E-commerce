const mongoose = require("mongoose");

const validator = require("validator");

const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
});

// Static password
userSchema.statics.signup = async function (email, password, username) {
  const exit = await this.findOne({ email });

  if (exit) {
    throw Error("Email already in use");
  }

  // validation
  if (!email || !password) {
    throw Error("Please Make sure you fill all the field");
  }
  if (!validator.isEmail(email)) {
    throw Error("Please enter correct email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Your passowrd is not strong enough");
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    username,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (!email || !password) {
    throw Error("Please make sure you fill All the field");
  }

  if (!user) {
    throw Error("Incorrect email");
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw Error("Incorrect passwrod");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
