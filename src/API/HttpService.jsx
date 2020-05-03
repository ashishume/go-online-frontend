import axios from "axios";

const http = axios.create({
  baseURL: "https://helixlive.herokuapp.com",
  // baseURL: "http://localhost:8000",
});

export default http;
