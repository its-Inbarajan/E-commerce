// const jwt = require("jsonwebtoken");
// const Admin = require("../models/adminModels");
// SECRET_KEY = "asdfksdfn";

// const createToken = (_id) => {
//   return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
// };

// const AdminController = async function (req, res) {
//   const { email, password, userType } = req.body;

//   try {
//     const user = await Admin.admin(email, password, userType);

//     const token = createToken(user._id);

//     res.status(200).json({ email, token });
//   } catch (error) {
//     res.status(401).json({ error: error.message });
//   }
// };

// module.exports = { AdminController };

// // try {
// //   const admin = await Admin.admin(email, password, userType);

// //   const token = createToken(admin._id);

// //   res.status(200).json({ email, token, userType });
// // } catch (error) {
// //   res.status(400).json({ error: error.message });
// // }

// // const exAdminUser = await Admin.findOne({ email });

// // if (exAdminUser) {
// //   return res.status(200).json({ message: "Admin already exit" });
// // }

// // if (email && password && userType) {
// //   const AdminResult = {
// //     email: email,
// //     password: await bcrypt.hash(password, 10),
// //     userType: "admin",
// //   };

// //   const data = await Admin.create(AdminResult);

// //   try {
// // if (data) {
// //   const token = jwt.sign({ email: data.email, id: data._id }, SECRET_KEY);
// //   if (token) {
// //     const updateToken = await Admin.findOneAndUpdate(
// //       { _id: data.id },
// //       { $set: { token: token } }
// //     );
// //     res.status(200).json({
// //       message: "Register Successfully",
// //       status: true,
// //       data: data,
// //     });
// //   } else {
// //     res
// //       .status(200)
// //       .json({ message: "some error in toke generation", status: false });
// //   }
// // }
// //   } catch (error) {
// //     console.log("Admin Error", error);
// //   }
// // }
