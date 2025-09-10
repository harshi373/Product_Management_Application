

const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ price: 1 }); // sort by price ascending
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// ADD product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: "Error adding product" });
  }
};

// DELETE product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};


// UPDATE product
const updateProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true}
    );
    if (!updated) {
       console.log("hii")
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updated);
  } catch (error) {
     console.log("hii")
    res.status(400).json({ message: "Error updating product" });

  }
};

module.exports = { getProducts, addProduct, deleteProduct, updateProduct };
