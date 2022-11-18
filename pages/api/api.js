import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://dev.jorkshield.co.zw",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "https://dev.jorkshield.co.zw/";

const backend = axios.create({
  baseURL: "https://dev.jorkshield.co.zw",
});
export { apiClient, backend, uri };
