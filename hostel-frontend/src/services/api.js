import axios from "axios";

const API = axios.create({
  baseURL: "https://web-production-7987c.up.railway.app/api"
});

export default API;