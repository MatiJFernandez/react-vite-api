// Este archivo proporciona un contexto global para gestionar el estado de los unicornios en la aplicación.
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api"; // Asegurate que esta ruta sea correcta

const UnicornContext = createContext();

export const useUnicorns = () => useContext(UnicornContext);

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    getUnicorns();
  }, []);

  const getUnicorns = async () => {
    try {
      const res = await api.get("/unicorns");
      setUnicorns(res.data);
    } catch (error) {
      console.error("Error al obtener unicornios:", error);
    }
  };

  const createUnicorn = async (newUnicorn) => {
    try {
      await api.post("/unicorns", newUnicorn);
      getUnicorns(); // Refrescar lista
    } catch (error) {
      console.error("Error al crear unicornio:", error);
    }
  };

  const editUnicorn = async (id, updatedData) => {
    try {
      await api.put(`/unicorns/${id}`, updatedData);
      getUnicorns();
    } catch (error) {
      console.error("Error al editar unicornio:", error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      const response = await api.delete(`/unicorns/${id}`);
      if (response.status === 200) {
        await getUnicorns(); // Solo actualizamos si la eliminación fue exitosa
      }
    } catch (error) {
      console.error("Error al eliminar unicornio:", error.response?.data || error.message);
      if (error.response?.status === 404) {
        console.error("El unicornio no existe o ya fue eliminado");
      } else if (error.response?.status === 401) {
        console.error("El token de la API ha expirado. Por favor, actualiza el token en src/api/api.js");
      }
    }
  };

  return (
    <UnicornContext.Provider value={{ unicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};
