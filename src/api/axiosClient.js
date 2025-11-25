import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://dev-backend-4oow.onrender.com";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;
