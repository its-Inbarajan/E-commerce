const express = require("express");

const roter = express.Router();

const {
  createBooking,
  findAllProduct,
  findSingleProduct,
} = require("../controllers/bookingsControllers");

// get ALl product
roter.get("/", findAllProduct);

// create booking or send detailes of product to database
roter.post("/", createBooking);

// get Single Product with id
roter.get("/:id", findSingleProduct);
module.exports = roter;
