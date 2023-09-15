const { default: mongoose } = require("mongoose");
const Product = require("../models/productModels");
// const multer = require("multer");

// get All product
const findAllProduct = async (req, res) => {
  // const user_id = req.user._id;

  const products = await Product.find();

  res.status(200).json({ products });
};

// get a single Prouct
const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ error: "No such products found" });
  }

  // const product = await Product.findById(id);
  try {
    const foundId = await Product.findById(id);
    res.status(200).json(foundId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create a new product
const createProduct = async (req, res) => {
  const { title, product, load, Price } = req.body;

  let emptyField = [];

  if (!title) {
    emptyField.push("title");
  }
  if (!product) {
    emptyField.push("product");
  }
  if (!load) {
    emptyField.push("load");
  }
  if (!Price) {
    emptyField.push("Price");
  }

  // if (!image) {
  //   emptyField.push("load");
  // }

  if (emptyField.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the field", emptyField });
  }

  try {
    // const storage = multer.diskStorage({
    //   destination : (req, res, cd) =>{
    //     cd(null, 'assets/images')
    //   },
    //   filename : (req, file, cd)=>{
    //     cd(null, file.filename + "_" +  path.exteme)
    //   }
    // })

    const products = await Product.create({ title, product, load, Price });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findByIdAndDelete({ _id: id });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }
  res.status(200).json(product);
};

// upate a product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    return res.status(404).json({ error: "can't find the product" });
  }
  res.status(200).json(product);
};

module.exports = {
  createProduct,
  findAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
