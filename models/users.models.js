const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Shema = mongoose.Schema;

const usersSchema = new Shema({
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

usersSchema.statics.userSignup = async function (email, password, username) {
  const userSign = await this.findOne({ email });

  if (userSign) {
    throw Error("User already exits");
  }

  if (!email || !password || !username) {
    throw Error("Please fill all the filed");
  }

  if (!validator.isEmail(email)) {
    throw Error("please enter correct email format");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("please enter strong password");
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const users = await this.create({
    email,
    password: hash,
    username,
  });
  return users;
};

usersSchema.statics.userLogin = async function (email, password, username) {
  const users = await this.findOne({ email });

  let emtyField = [];

  if (!email) {
    emtyField.push("email");
  }
  if (!password) {
    emtyField.push("password");
  }

  if (!email || !password) {
    throw Error("please fill all the field");
  }

  if (!users) {
    throw Error("User not found");
  }

  const comparePassword = await bcrypt.compare(password, users.password);
  if (!comparePassword) {
    throw Error("Incorrect passwrod");
  }
  return users;
};

module.exports = mongoose.model("Users", usersSchema);
