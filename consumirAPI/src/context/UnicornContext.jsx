import { createContext, useContext, useEffect, useState } from "react";

const UnicornContext = createContext();

export const useUnicorns = () => useContext(UnicornContext);

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("unicorns")) || [];
    setUnicorns(saved);
  }, []);

  const persist = (data) => {
    setUnicorns(data);
    localStorage.setItem("unicorns", JSON.stringify(data));
  };

  const createUnicorn = (newUnicorn) => {
    const updated = [...unicorns, { id: crypto.randomUUID(), ...newUnicorn }];
    persist(updated);
  };

  const editUnicorn = (id, updatedData) => {
    const updated = unicorns.map(u => u.id === id ? { ...u, ...updatedData } : u);
    persist(updated);
  };

  const deleteUnicorn = (id) => {
    const updated = unicorns.filter(u => u.id !== id);
    persist(updated);
  };

  return (
    <UnicornContext.Provider value={{ unicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};
