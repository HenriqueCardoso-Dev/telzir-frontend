import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:4040/api/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api;