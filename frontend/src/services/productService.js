// frontend/src/services/productService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Get all products
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new product
export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};
