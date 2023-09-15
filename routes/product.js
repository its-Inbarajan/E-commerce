const express = require("express");

// const requireAuth = require("../middleware/requiredAuth");

const {
  createProduct,
  findAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productControllers");

const router = express.Router();

// protect All routes
// router.use(requireAuth);

// get all product
router.get("/", findAllProduct);

// single product
router.get("/:id", getProduct);

// post product
router.post("/", createProduct);

// delete product
router.delete("/:id", deleteProduct);

// patch products
router.patch("/:id", updateProduct);

module.exports = router;
