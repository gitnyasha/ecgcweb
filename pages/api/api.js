import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://app.jorkshield.co.zw",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "https://app.jorkshield.co.zw/";

const backend = axios.create({
  baseURL: "https://app.jorkshield.co.zw",
});
export { apiClient, backend, uri };
