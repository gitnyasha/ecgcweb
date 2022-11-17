import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://161.35.205.217",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "http://161.35.205.217/";

const backend = axios.create({
  baseURL: "http://161.35.205.217",
});
export { apiClient, backend, uri };
