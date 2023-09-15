// const express = require('express');

const { default: mongoose } = require("mongoose");
const Bookings = require("../models/bookingModels");

const findAllProduct = async (req, res) => {
  const bookedProducts = await Bookings.find();

  res.status(200).json({ bookedProducts });
};

// single product
const findSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ error: "No such products found" });
  }

  try {
    const BookedItems = await Bookings.findById(id);
    res.status(200).json(BookedItems);
  } catch (error) {
    res.status(401).json((error = error.message));
  }
};

const createBooking = async (req, res) => {
  try {
    const { email, username, seprateProduct, status } = req.body;

    const bookings = await Bookings.create({
      email,
      username,
      seprateProduct,
      status,
    });

    if (res.body === "") {
      res.status(401).json("something is worng");
    }
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
  findAllProduct,
  findSingleProduct,
};
