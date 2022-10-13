import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://sheltered-refuge-20729.herokuapp.co.zw",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "https://sheltered-refuge-20729.herokuapp.co.zw/";

const backend = axios.create({
  baseURL: "https://sheltered-refuge-20729.herokuapp.co.zw",
});
export { apiClient, backend, uri };
