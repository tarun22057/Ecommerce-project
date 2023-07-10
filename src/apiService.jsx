import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Set your API base URL here
});

export const getAllProducts = async () => {
  try {
    const response = await apiService.get("/products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};
