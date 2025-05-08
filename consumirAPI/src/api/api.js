// Este archivo configura la instancia de Axios para realizar solicitudes HTTP a la API.
// src/api/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/f1cbaa7c9df64426bed7168d56a8204f", 
});

