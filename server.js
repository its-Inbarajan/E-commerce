require("dotenv").config();
const { default: mongoose } = require("mongoose");

const ProductRoutes = require("./routes/product");
const userRouter = require("./routes/user");
const bookingRouter = require("./routes/booking");

// const adminRoter = require("./routes/admin");
const express = require("express");
const clientRouter = require("./routes/users");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// express
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

// admin router
app.use("/api/product", ProductRoutes);
app.use("/api/user", userRouter);

// user router
app.use("/api/users", clientRouter);

// booking router
app.use("/api/bookings", bookingRouter);

// connection db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening server
    app.listen(process.env.PORT, () => {
      console.log(
        "connecting to db & server running on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log("Connection error", error);
  });
