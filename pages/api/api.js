import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "http://localhost:8000/";

const backend = axios.create({
  baseURL: "http://localhost:8000",
});
export { apiClient, backend, uri };
