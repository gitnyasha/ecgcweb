import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://sheltered-refuge-20729.herokuapp.com",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const uri = "https://sheltered-refuge-20729.herokuapp.com/";

const backend = axios.create({
  baseURL: "https://sheltered-refuge-20729.herokuapp.com",
  // baseURL: "https://sheltered-refuge-20729.herokuapp.com",
});
export { apiClient, backend, uri };
