import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "http://localhost:8000";

const backend = axios.create({
  baseURL: "http://localhost:8000",
  // baseURL: "https://sheltered-refuge-20729.herokuapp.com",
});
export { apiClient, backend, uri };
