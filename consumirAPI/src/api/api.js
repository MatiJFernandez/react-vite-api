// Este archivo configura la instancia de Axios para realizar solicitudes HTTP a la API.
// src/api/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/82247fb6049241b1854f3e32157e52c4", 
});

