import axios from "axios";

const API_URL = "https://course-api.com/react-useReducer-cart-project";

const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};

const cartService = {
  fetchProducts,
};

export default cartService;
