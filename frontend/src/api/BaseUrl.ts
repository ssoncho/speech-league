import axios from "axios";

const BASE_URL = "https://speech-league.onrender.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
});
