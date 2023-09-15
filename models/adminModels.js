// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const admintSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   userType: {
//     type: String,
//     require: true,
//   },
// });

// // Admin
// admintSchema.statics.admin = async function (email, password, userType) {
//   const Admin = await this.findOne({ email: "admin@admin.com" });

//   if (!email || !password || !userType) {
//     throw Error("please fill the field");
//   }

//   if (!Admin) {
//     throw Error("Incorrect email");
//   }
//   if (!userType) {
//     throw Error("User type is required");
//   }

//   const comparePassword = await bcrypt.compare(password, Admin.password);
//   if (!comparePassword) {
//     throw Error("Incorrect passwrod");
//   }

//   return Admin;
// };

// module.exports = mongoose.model("Admin", admintSchema);
