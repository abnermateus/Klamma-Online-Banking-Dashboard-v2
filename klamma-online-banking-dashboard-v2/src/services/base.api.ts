import axios from "axios";

const BaseApi = axios.create({
  baseURL: "http://localhost:3001",

  headers: {
    get: {
      "Content-Type": "application/json",
    },

    post: {
      "Content-Type": "application/json",
    },

    put: {
      "Content-Type": "application/json",
    },

    delete: {
      "Content-Type": "application/json",
    },
  },
});

export default BaseApi;