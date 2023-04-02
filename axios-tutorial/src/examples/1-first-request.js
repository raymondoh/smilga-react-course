import axios from "axios";
import { useEffect } from "react";

// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
