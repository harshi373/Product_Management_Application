import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Fetch all products
export const getProducts = async () => {
  try{const res = await axios.get(API_URL);
  return res.data;}
  catch(error){
    throw error;
  }
};

// Add new product
export const addProduct = async (product) => {
  try {const res = await axios.post(API_URL, product);
  return res.data;}
  catch(error){
    throw error;
  }

};

// Update product
export const updateProduct = async (id, updatedProduct) => {
  try{
    const res = await axios.put(`${API_URL}/${id}`, updatedProduct);
    return res.data;}
    catch(error){
      throw error;
    }
};

// Delete product
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

