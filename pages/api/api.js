import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://167.71.66.220",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "http://167.71.66.220/";

const backend = axios.create({
  baseURL: "http://167.71.66.220",
});
export { apiClient, backend, uri };
