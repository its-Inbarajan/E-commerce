const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seprateProduct = new Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  product: String,
  load: Number,
  Price: Number,
});

const BookingSchme = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    seprateProduct: [seprateProduct],
    status: {
      type: String,
      default: "processing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchme);
