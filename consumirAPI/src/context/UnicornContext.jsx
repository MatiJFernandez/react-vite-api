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
      await api.delete(`/unicorns/${id}`);
      getUnicorns();
    } catch (error) {
      console.error("Error al eliminar unicornio:", error);
    }
  };

  return (
    <UnicornContext.Provider value={{ unicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};
