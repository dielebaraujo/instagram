import axios from "axios";

const defaultApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: { "x-api-key": "ea89fd89-d86f-479e-8a6d-00a2d5a87609" },
});

export default defaultApi;
