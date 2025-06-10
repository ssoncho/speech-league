import axios from "axios";

const BASE_URL = "https://speechleague.na4u.ru/api";

export const api = axios.create({
  baseURL: BASE_URL,
});
