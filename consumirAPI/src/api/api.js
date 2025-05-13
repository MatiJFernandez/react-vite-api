// Este archivo configura la instancia de Axios para realizar solicitudes HTTP a la API.
// src/api/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/bd1d8f9e30634d8abce6f6a8afb6b21d", 
});
