const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    product: {
      type: String,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
    Price: {
      type: Number,
      require: true,
    },
    // image: {
    //   data: Buffer,
    //   require: true,
    //   contentType : String
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
