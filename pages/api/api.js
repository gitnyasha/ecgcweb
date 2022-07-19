import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

const backend = axios.create({
  baseURL: "https://sheltered-refuge-20729.herokuapp.com",
  // baseURL: "https://sheltered-refuge-20729.herokuapp.com",
});
export { apiClient, backend };
